import AuthLayout from '@/components/layouts/auth'

export default function AdminAuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>
}
