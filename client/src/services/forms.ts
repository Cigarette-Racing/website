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
