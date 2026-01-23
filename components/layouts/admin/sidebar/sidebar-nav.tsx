'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { AdminNavItem } from '@/config/admin/navigation'
import { usePathname } from 'next/navigation'
import { SideMenuItem } from './side-menu-item'
import { isActivePath } from '@/lib/navigation/is-active-path'

interface SidebarNaviProps {
  navigation: AdminNavItem[]
}

export function SidebarNav({ navigation }: SidebarNaviProps) {
  const pathname = usePathname()

  return (
    <>
      {navigation.map(section => (
        <SidebarGroup key={section.id}>
          <SidebarGroupContent className="flex flex-col">
            {!section.children ? (
              <SidebarMenu>
                <SideMenuItem item={section} isActive={isActivePath(pathname, section.href)} />
              </SidebarMenu>
            ) : (
              <>
                <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
                <SidebarMenu>
                  {section.children.map(item => (
                    <SideMenuItem
                      key={item.id}
                      item={item}
                      isActive={isActivePath(pathname, item.href)}
                    />
                  ))}
                </SidebarMenu>
              </>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}
