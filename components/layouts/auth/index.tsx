import { Logo } from '@/components/common'
import { MoonIcon } from 'lucide-react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center layout-gap">
      <div className="absolute top-8 right-10">
        <MoonIcon />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex gap-2 self-center">
            <Logo />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
