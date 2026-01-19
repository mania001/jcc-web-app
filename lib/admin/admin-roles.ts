export const AdminRoles = {
  MASTER: 'master',
  MANAGER: 'manager',
  EDITOR: 'editor',
} as const

export type AdminRole = (typeof AdminRoles)[keyof typeof AdminRoles]

export interface AdminContext {
  id: string
  role: AdminRole
}
