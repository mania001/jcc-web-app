import { ErrorCodes, type ErrorCode } from '@/lib/errors/error-codes'

type Props = {
  code: ErrorCode
}

const AUTH_ERROR_MESSAGES: Partial<Record<ErrorCode, string>> = {
  // 공통
  [ErrorCodes.REQUIRED_FIELD]: '필수 항목을 입력해주세요.',
  [ErrorCodes.UNKNOWN_ERROR]: '알 수 없는 오류가 발생했습니다.',

  // Auth 전용
  [ErrorCodes.INVALID_EMAIL]: '이메일 형식이 올바르지 않습니다.',
  [ErrorCodes.PASSWORD_TOO_SHORT]: '비밀번호가 너무 짧습니다.',
  [ErrorCodes.INVALID_CREDENTIALS]: '이메일 또는 비밀번호가 올바르지 않습니다.',
  [ErrorCodes.ADMIN_NOT_FOUND]: '관리자 계정이 존재하지 않습니다.',
  [ErrorCodes.ADMIN_NOT_ACTIVE]: '아직 승인되지 않은 관리자 계정입니다.',
}

export function AuthErrorMessage({ code }: Props) {
  const message = AUTH_ERROR_MESSAGES[code]
  if (!message) return null

  return <p className="text-sm text-red-500">{message}</p>
}
