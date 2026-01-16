'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useActionState } from 'react'
import { AdminLogin } from '../actions/admin-login'
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginInput } from '../schema/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useServerFormAction } from '@/lib/use-server-form-action'
import { AuthErrorMessage } from './AuthErrorMessage'
import { ErrorCode } from '@/lib/errors/error-codes'

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(AdminLogin, null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  const submit = useServerFormAction<LoginInput>(formAction)

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Log In</CardTitle>
        <CardDescription>환영합니다. 관리자 계정으로 로그인하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input {...register('email')} type="email" required placeholder="admin@example.com" />
            {errors.email && <AuthErrorMessage code={errors.email.message as ErrorCode} />}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              {...register('password')}
              type="password"
              required
              placeholder="비밀번호를 입력해주세요."
            />
            {errors.password && <AuthErrorMessage code={errors.password.message as ErrorCode} />}
          </div>

          {state?.success === false && <AuthErrorMessage code={state.code!} />}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? '로그인 중...' : '로그인'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
