import { AdminRoles } from '@/lib/admin'
import { boolean, pgEnum, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core'

export const adminRoleEnum = pgEnum(
  'admin_role',
  Object.values(AdminRoles) as [string, ...string[]],
)

export const admins = pgTable('admins', {
  id: uuid('id').primaryKey(),

  role: adminRoleEnum('role').notNull().default('editor'),

  isActive: boolean('is_active').notNull().default(false),

  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),

  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})
