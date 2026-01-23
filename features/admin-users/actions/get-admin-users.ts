'use server'

import { db } from '@/db'
// import { requireAdmin } from '@/lib/admin/require-admin'
import { admins, authUsers } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'
// import { AdminRoles } from '@/config/admin/roles'

export async function getAdminUsers() {
  // await requireAdmin({ allowedRoles: [AdminRoles.MASTER] })

  return db
    .select({
      id: admins.id,
      role: admins.role,
      isActive: admins.isActive,
      createdAt: admins.createdAt,
      email: authUsers.email,
    })
    .from(admins)
    .leftJoin(authUsers, eq(admins.id, authUsers.id))
    .orderBy(desc(admins.createdAt))
}
