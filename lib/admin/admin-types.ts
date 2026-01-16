export type AdminRole = 'master' | 'manager' | 'content'

export interface AdminContext {
  id: string
  role: AdminRole
}
