'use client'

import { AdminRoles, type AdminRole } from '@/config/admin/roles'
import { updateAdminRole } from '../actions/update-admin-role'
import { updateAdminStatus } from '../actions/update-admin-status'

type AdminUser = Awaited<
  ReturnType<typeof import('../actions/get-admin-users').getAdminUsers>
>[number]

export function AdminUserRow({ admin }: { admin: AdminUser }) {
  return (
    <tr>
      <td>{admin.email}</td>
      <td>{admin.role}</td>
      <td>
        <button onClick={() => updateAdminStatus(admin.id, !admin.isActive)}>
          {admin.isActive ? '비활성화' : '활성화'}
        </button>
      </td>
      <td>
        <select
          value={admin.role}
          onChange={e => updateAdminRole(admin.id, e.target.value as AdminRole)}
        >
          {Object.values(AdminRoles).map(role => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </td>
      <td>{new Date(admin.createdAt).toLocaleDateString('ko-KR')}</td>
    </tr>
  )
}
