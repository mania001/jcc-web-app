import type { ErrorCode } from './error-codes'

export type ErrorHandling = {
  status: number
  redirect?: string
  logout?: boolean
}

export const ErrorStatusMap: Record<ErrorCode, ErrorHandling> = {
  // default
  UNKNOWN_ERROR: { status: 500 },

  // validation
  REQUIRED_FIELD: { status: 400 },
  INVALID_EMAIL: { status: 400 },
  PASSWORD_TOO_SHORT: { status: 400 },

  // auth
  INVALID_CREDENTIALS: { status: 401 },
  ADMIN_NOT_FOUND: { status: 403 },
  ADMIN_NOT_ACTIVE: { status: 403 },
  PERMISSION_DENIED: {
    status: 403,
    redirect: '/admin/login',
    logout: true,
  },
}
