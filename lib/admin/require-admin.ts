import 'server-only'

import { redirect } from 'next/navigation'
import { createClient } from '../supabase/server'
import { db } from '@/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { AdminRole } from '@/config/admin/roles'
import { AdminContext } from './types'

export async function requireAdmin(): Promise<AdminContext> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 1. 로그인 안 됨
  if (!user) redirect('/admin/login')

  // 2. admins 테이블 확인
  const admin = await db.query.admins.findFirst({
    where: eq(admins.id, user.id),
  })

  if (!admin) redirect('/admin/login')

  // 3. 승인 안 됨
  if (!admin.isActive) redirect('/admin/pending')

  return {
    id: admin.id,
    role: admin.role as AdminRole,
    email: user.email!,
    name: user.user_metadata?.name ?? 'Admin',
    thumbnail: user.user_metadata?.avatar_url ?? null,
  }
}
