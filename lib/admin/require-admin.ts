import 'server-only'

import { redirect } from 'next/navigation'
import { createClient } from '../supabase/server'
import { AdminRole } from './admin-types'
import { db } from '@/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'

interface RequireAdminOptions {
  allowedRoles?: AdminRole[]
}

export async function requireAdmin(options: RequireAdminOptions = {}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 1. 로그인 안 됨
  if (!user) {
    redirect('/admin/login')
  }

  // 2. admins 테이블 확인
  const admin = await db.query.admins.findFirst({
    where: eq(admins.id, user.id),
  })

  if (!admin) {
    redirect('/admin/login')
  }

  // 3. 승인 안 됨
  if (!admin.isActive) {
    redirect('/admin/pending')
  }

  // 4. role 제한
  if (options.allowedRoles && !options.allowedRoles.includes(admin.role as AdminRole)) {
    redirect('/admin')
  }

  return {
    id: admin.id,
    role: admin.role,
  }
}
