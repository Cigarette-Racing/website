import { useForm } from 'react-final-form'
import { useEffect, useState } from 'react'

const id = (x: any) => x

type OnSubmitCreator = (mapper?: (x: any) => any) => (values: any) => void

export const onSubmitCreator: OnSubmitCreator = (mapper = id) => (values) => {
  const submissionValues = mapper(values)

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'form-name': values['form-name'],
      ...submissionValues,
    }),
  })
}

export function useFormState({
  subscription,
}: {
  subscription: Record<string, boolean>
}) {
  const form = useForm('useFormState__CUSTOM')
  const [state, setState] = useState(() => form.getState())
  useEffect(
    () =>
      form.subscribe((newState) => {
        // @ts-ignore
        setState(newState)
      }, subscription),
    []
  )
  return state
}
