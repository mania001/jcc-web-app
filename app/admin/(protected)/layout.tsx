import AdminLayout from '@/components/layouts/admin'
import { adminNavigation } from '@/config/admin/navigation'
import { hasAdminPagePermission } from '@/lib/admin'
import { selectAdminNavigation } from '@/lib/admin/navigation'
import { requireAdmin } from '@/lib/admin/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  // 관리자 인증 요구
  const admin = await requireAdmin()

  // 현재 경로 가져오기
  const headersList = await headers()
  const pathname = headersList.get('x-pathname')

  if (!pathname) redirect('/')

  // 권한 확인
  const allowed = hasAdminPagePermission({
    pathname,
    role: admin.role,
    navigation: adminNavigation,
  })

  if (!allowed) redirect('/admin')

  // 권한에 따른 네비게이션 필터링
  const visibleNavigation = selectAdminNavigation({
    role: admin.role,
    navigation: adminNavigation,
  })

  return (
    <AdminLayout user={admin} navigation={visibleNavigation}>
      {children}
    </AdminLayout>
  )
}
