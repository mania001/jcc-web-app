'use server'

import { createClient } from '@/lib/supabase/server'
import { loginSchema } from '../schema/login-schema'
import { redirect } from 'next/navigation'
import type { ActionResult } from '@/lib/action-result'
import { db } from '@/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { parseZodError } from '@/lib/errors/parse-zod-error'
import { ErrorCodes } from '@/lib/errors/error-codes'

export async function AdminLogin(_: unknown, formData: FormData): Promise<ActionResult> {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData))

  if (!parsed.success) {
    return {
      success: false,
      code: parseZodError(parsed.error),
    }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data)

  if (error || !data.user) {
    return {
      success: false,
      code: ErrorCodes.INVALID_CREDENTIALS,
    }
  }

  // admins 테이블 확인
  const admin = await db.query.admins.findFirst({
    where: eq(admins.id, data.user.id),
  })

  if (!admin) {
    return { success: false, code: ErrorCodes.ADMIN_NOT_FOUND }
  }

  if (!admin.isActive) {
    return { success: false, code: ErrorCodes.ADMIN_NOT_ACTIVE }
  }

  redirect('/admin')
}
