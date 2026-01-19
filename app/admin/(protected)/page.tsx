import { getAdminUsers } from '@/features/admin-users/actions/get-admin-users'
import { AdminUserTable } from '@/features/admin-users/components/admin-user-table'

export default async function Dashboard() {
  const admins = await getAdminUsers()
  return <AdminUserTable admins={admins} />
}
