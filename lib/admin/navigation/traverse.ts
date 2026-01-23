import { AdminNavItem } from '@/config/admin/navigation'
import { AdminRole } from '@/config/admin/roles'

interface TraverseContext {
  role: AdminRole
  pathname?: string
}

interface TraverseResult {
  allowed: boolean
  tree?: AdminNavItem[]
}

export function traverseAdminNavigation(
  navigation: AdminNavItem[],
  ctx: TraverseContext,
): TraverseResult {
  function walk(
    items: AdminNavItem[],
    parentRoles?: AdminRole[],
  ): { allowed: boolean; tree: AdminNavItem[] } {
    let allowed = false

    const tree = items
      .map(item => {
        const effectiveRoles = item.roles ?? parentRoles
        const roleAllowed = !effectiveRoles || effectiveRoles.includes(ctx.role)

        if (!roleAllowed) return null

        const isPathMatch = ctx.pathname && item.href && ctx.pathname.startsWith(item.href)

        let childResult = { allowed: false, tree: undefined as AdminNavItem[] | undefined }

        if (item.children) {
          childResult = walk(item.children, effectiveRoles)
        }

        if (isPathMatch || childResult.allowed) {
          allowed = true
        }

        return {
          ...item,
          children: childResult.tree,
        }
      })
      .filter(Boolean) as AdminNavItem[]

    return { allowed, tree }
  }

  const result = walk(navigation)

  return {
    allowed: Boolean(ctx.pathname ? result.allowed : true),
    tree: ctx.pathname ? undefined : result.tree,
  }
}
