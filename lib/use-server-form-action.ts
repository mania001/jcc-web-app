'use client'

import { startTransition } from 'react'

type FormValue = FormDataEntryValue | null | undefined

export function useServerFormAction<T extends Record<string, FormValue>>(
  formAction: (formData: FormData) => void,
) {
  return (data: T) => {
    const formData = new FormData()

    for (const [key, value] of Object.entries(data)) {
      if (value !== null && value !== undefined) {
        formData.append(key, value)
      }
    }

    startTransition(() => {
      formAction(formData)
    })
  }
}
