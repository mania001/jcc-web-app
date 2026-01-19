'use server'

import { db } from '@/db'
import { admins } from '@/db/schema'
import { AdminActionErrors, AdminRoles, requireAdmin } from '@/lib/admin/'
import { eq } from 'drizzle-orm'

export async function updateAdminStatus(adminId: string, isActive: boolean) {
  const admin = await requireAdmin({ allowedRoles: [AdminRoles.MASTER] })

  if (admin.id === adminId) {
    throw new Error(AdminActionErrors.CANNOT_DEACTIVATE_SELF)
  }

  await db.update(admins).set({ isActive }).where(eq(admins.id, adminId))
}
