'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useActionState } from 'react'
import { AdminLogin } from '../ations'

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(AdminLogin, null)

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Log In</CardTitle>
        <CardDescription>환영합니다. 관리자 계정으로 로그인하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" name="email" type="email" required placeholder="admin@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="비밀번호를 입력해주세요."
            />
          </div>

          {state?.error && <p className="text-sm text-red-500">{state.error}</p>}

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? '로그인 중...' : '로그인'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
