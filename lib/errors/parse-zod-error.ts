import { ZodError } from 'zod'
import { ErrorCode } from './error-codes'

export function parseZodError(error: ZodError): ErrorCode {
  const issue = error.issues[0]
  if (!issue) return 'UNKNOWN_ERROR'

  // zod message에 ErrorCode를 직접 넣는 패턴
  return issue.message as ErrorCode
}
