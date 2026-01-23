import { AdminNavItem } from '@/config/admin/navigation'
import { AdminRole } from '@/config/admin/roles'
import { traverseAdminNavigation } from './traverse'

interface Params {
  role: AdminRole
  navigation: AdminNavItem[]
}

export function selectAdminNavigation({ role, navigation }: Params) {
  return traverseAdminNavigation(navigation, { role }).tree ?? []
}

// interface Params {
//   role: AdminRole
//   navigation: AdminNavItem[]
// }

// export function selectAdminNavigation({ role, navigation }: Params): AdminNavItem[] {
//   function filter(items: AdminNavItem[], parentRoles?: AdminRole[]): AdminNavItem[] {
//     return items
//       .map(item => {
//         const effectiveRoles = item.roles ?? parentRoles

//         // 현재 role 접근 불가
//         if (effectiveRoles && !effectiveRoles.includes(role)) {
//           return null
//         }

//         const children = item.children ? filter(item.children, effectiveRoles) : undefined

//         // children이 전부 제거되면 그룹도 제거
//         if (item.children && (!children || children.length === 0)) {
//           return null
//         }

//         return {
//           ...item,
//           children,
//         }
//       })
//       .filter(Boolean) as AdminNavItem[]
//   }

//   return filter(navigation)
// }
