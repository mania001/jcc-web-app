'use server'

import { createClient } from '@/lib/supabase/server'
import { adminLoginSchema } from '../schema'
import { redirect } from 'next/navigation'
import type { ActionResult } from '@/lib/action-result'

export async function AdminLogin(_: unknown, formData: FormData): Promise<ActionResult> {
  const parsed = adminLoginSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? '이메일 또는 비밀번호 형식이 올바르지 않습니다.',
    }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword(parsed.data)

  if (error) {
    return { success: false, error: '로그인 정보가 올바르지 않습니다.' }
  }

  redirect('/admin')
}
