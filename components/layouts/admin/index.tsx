import { SidebarProvider } from '@/components/ui/sidebar'
import { AdminSidebar } from './admin-sidebar'
import { AdminHeader } from './admin-header'
import { AdminNavItem } from '@/config/admin/navigation'

interface AdminLayoutProps {
  navigation: AdminNavItem[]
  children: React.ReactNode
}

export default function AdminLayout({ navigation, children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AdminSidebar navigation={navigation} />
        <div className="flex flex-1 flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
