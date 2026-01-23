import { isActivePath } from './is-active-path'

interface NavLikeItem {
  href?: string
  children?: NavLikeItem[]
}

interface IsSectionActiveParams<T extends NavLikeItem> {
  pathname: string
  item: T
}

export function isSectionActive<T extends NavLikeItem>({
  pathname,
  item,
}: IsSectionActiveParams<T>): boolean {
  if (item.href && isActivePath(pathname, item.href)) {
    return true
  }

  if (item.children) {
    return item.children.some(child => isSectionActive({ pathname, item: child }))
  }

  return false
}
