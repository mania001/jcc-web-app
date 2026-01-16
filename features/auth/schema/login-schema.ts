import { ErrorCodes } from '@/lib/errors/error-codes'
import z, { email } from 'zod'

export const loginSchema = z.object({
  email: email(ErrorCodes.INVALID_EMAIL).min(1, ErrorCodes.REQUIRED_FIELD),
  password: z.string().min(8, ErrorCodes.PASSWORD_TOO_SHORT),
})

export type LoginFormValues = z.infer<typeof loginSchema>
