import { requireAdmin } from '@/lib/admin/require-admin'

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin()

  return (
    <div>
      {admin.id} - {admin.role}
      {children}
    </div>
  )
}
