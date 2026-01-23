import { AdminNavItem } from '@/config/admin/navigation'
import { AdminRole } from '@/config/admin/roles'
import { traverseAdminNavigation } from './navigation'

interface Params {
  pathname: string
  role: AdminRole
  navigation: AdminNavItem[]
}

export function hasAdminPagePermission({ pathname, role, navigation }: Params) {
  return traverseAdminNavigation(navigation, { pathname, role }).allowed
}

// interface Params {
//   pathname: string
//   role: AdminRole
//   navigation: AdminNavItem[]
// }

// export function hasAdminPagePermission({ pathname, role, navigation }: Params): boolean {
//   function traverse(items: AdminNavItem[], parentRoles?: AdminRole[]): boolean {
//     for (const item of items) {
//       const effectiveRoles = item.roles ?? parentRoles

//       // 현재 경로와 매칭되는 경우
//       if (item.href && pathname.startsWith(item.href)) {
//         if (!effectiveRoles) return true
//         return effectiveRoles.includes(role)
//       }

//       // children 탐색 (roles 상속)
//       if (item.children) {
//         const allowed = traverse(item.children, effectiveRoles)
//         if (allowed) return true
//       }
//     }
//     return false
//   }

//   return traverse(navigation)
// }
