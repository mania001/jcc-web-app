'use server'

import { createClient } from '@/lib/supabase/server'
import { adminLoginSchema } from '../schema'
import { redirect } from 'next/navigation'
import type { ActionResult } from '@/lib/action-result'
import { db } from '@/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function AdminLogin(_: unknown, formData: FormData): Promise<ActionResult> {
  const parsed = adminLoginSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? '이메일 또는 비밀번호 형식이 올바르지 않습니다.',
    }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data)

  if (error) {
    return { success: false, error: '로그인 정보가 올바르지 않습니다.' }
  }

  // admins 테이블 확인
  const admin = await db.query.admins.findFirst({
    where: eq(admins.id, data.user.id),
  })

  if (!admin) {
    return { success: false, error: '관리자 권한이 없습니다' }
  }

  if (!admin.isActive) {
    return { success: false, error: '관리자 승인 대기 중입니다' }
  }

  redirect('/admin')
}
