function normalize(path: string) {
  return path !== '/' ? path.replace(/\/+$/, '') : '/'
}

export function isActivePath(pathname: string, href?: string): boolean {
  if (!href) return false

  const current = normalize(pathname)
  const target = normalize(href)

  if (target === '/') return current === '/'
  if (current === target) return true

  return current.startsWith(`${target}/`)
}
