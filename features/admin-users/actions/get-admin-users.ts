'use server'

import { db } from '@/db'
import { AdminRoles, requireAdmin } from '@/lib/admin'
import { admins, authUsers } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'

export async function getAdminUsers() {
  await requireAdmin({ allowedRoles: [AdminRoles.MASTER] })

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
