import z, { email } from 'zod'

export const adminLoginSchema = z.object({
  email: email().min(1, '이메일을 입력해주세요.'),
  password: z.string().min(8, '비밀번호를 최소 8자 이상 입력해주세요.'),
})

export type AdminLoginInput = z.infer<typeof adminLoginSchema>
