import { ErrorCode } from './errors/error-codes'

export type ActionSuccess<T = void> = {
  success: true
  data?: T
}

export type ActionFailure = {
  success: false
  code: ErrorCode
}

export type ActionResult<T = void> = ActionSuccess<T> | ActionFailure
