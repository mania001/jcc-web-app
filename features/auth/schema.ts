import z, { email } from 'zod'

export const loginSchema = z.object({
  email: email().min(1, '이메일을 입력해주세요.'),
  password: z.string().min(6, '비밀번호를 입력해주세요.'),
})

export type LoginInput = z.infer<typeof loginSchema>
