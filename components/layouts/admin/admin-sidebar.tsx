'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { AdminNavItem } from '@/config/admin/navigation'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { SideMenuItem } from './side-menu-item'
import { isActivePath } from '@/lib/navigation/is-active-path'

interface AdminSidebarProps {
  navigation: AdminNavItem[]
}

export function AdminSidebar({ navigation }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="#">
                <Image src={'/images/logo.png'} alt="" width={24} height={24} />
                <span className="text-base font-semibold">JCC.TV - Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-6 mb-12 gap-2">
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
      </SidebarContent>
    </Sidebar>
  )
}
