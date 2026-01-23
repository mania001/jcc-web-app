import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { AdminNavItem } from '@/config/admin/navigation'
import { adminIconMap } from './icon-map'

interface SideMenuItemProps {
  item: AdminNavItem
  isActive?: boolean
}

export function SideMenuItem({ item, isActive }: SideMenuItemProps) {
  const Icon = item.icon ? adminIconMap[item.icon] : null

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <a href={item.href}>
          {Icon && <Icon className="mr-2" />}
          <span className={isActive ? 'font-semibold' : ''}>{item.label}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
