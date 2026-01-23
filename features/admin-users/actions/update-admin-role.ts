'use server'

import { AdminRole } from '@/config/admin/roles'
// import { AdminActionErrors } from '@/config/admin/action-errors'
// import { AdminRole, AdminRoles } from '@/config/admin/roles'
import { db } from '@/db'
import { admins } from '@/db/schema'
// import { requireAdmin } from '@/lib/admin/require-admin'
// import { AdminRole } from '@/lib/admin/admin-roles'
import { eq } from 'drizzle-orm'

export async function updateAdminRole(adminId: string, role: AdminRole) {
  // const admin = await requireAdmin({ allowedRoles: [AdminRoles.MASTER] })

  // if (admin.id === adminId) {
  //   throw new Error(AdminActionErrors.CANNOT_CHANGE_SELF_ROLE)
  // }

  await db.update(admins).set({ role }).where(eq(admins.id, adminId))
}
