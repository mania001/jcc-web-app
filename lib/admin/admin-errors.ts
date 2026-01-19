export const AdminActionErrors = {
  CANNOT_CHANGE_SELF_ROLE: 'CANNOT_CHANGE_SELF_ROLE',
  CANNOT_DEACTIVATE_SELF: 'CANNOT_DEACTIVATE_SELF',
} as const

export type AdminActionError = (typeof AdminActionErrors)[keyof typeof AdminActionErrors]
