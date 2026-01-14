'use server'

import { createClient } from '@/lib/supabase/server'
import { loginSchema } from './schema'
import { redirect } from 'next/navigation'

export async function AdminLogin(_: unknown, formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return {
      error: '입력값이 올바르지 않습니다.',
    }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword(parsed.data)

  if (error) {
    return { error: '로그인 정보가 올바르지 않습니다.' }
  }

  redirect('/admin')
}
