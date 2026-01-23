import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'
import { AdminNavItem } from '@/config/admin/navigation'
import { SidebarHeaderLogo } from './sidebar-logo'
import { SidebarNav } from './sidebar-nav'
import { SidebarFooterProfile } from './sidebar-profile'
import { AdminContext } from '@/lib/admin/types'

interface AdminSidebarProps {
  user: AdminContext
  navigation: AdminNavItem[]
}

export function AdminSidebar({ user, navigation }: AdminSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarHeaderLogo />
      </SidebarHeader>
      <SidebarContent className="mt-6 mb-12 gap-2">
        <SidebarNav navigation={navigation} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterProfile user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
