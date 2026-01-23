import { AdminRole } from '@/config/admin/roles'

export interface AdminContext {
  id: string
  role: AdminRole
  email: string
  name: string
  thumbnail?: string | null
}
