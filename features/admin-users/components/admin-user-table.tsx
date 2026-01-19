import { AdminUserRow } from './admin-user-row'

type AdminUser = Awaited<
  ReturnType<typeof import('../actions/get-admin-users').getAdminUsers>
>[number]

export function AdminUserTable({ admins }: { admins: AdminUser[] }) {
  return (
    <table>
      <tbody>
        {admins.map(admin => (
          <AdminUserRow key={admin.id} admin={admin} />
        ))}
      </tbody>
    </table>
  )
}
