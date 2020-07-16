import string from '*.svg'
import { useForm } from 'react-final-form'
import { useLayoutEffect, useEffect, useState } from 'react'
import { FormState, AnyObject } from 'final-form'

const id = (x: any) => x

type OnSubmitCreator = (mapper?: (x: any) => any) => (values: any) => void

export const onSubmitCreator: OnSubmitCreator = (mapper = id) => (values) => {
  const submissionValues = mapper(values)

  fetch('https://bd4af6010c1b91a1192417426ee8b016.m.pipedream.net', {
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
