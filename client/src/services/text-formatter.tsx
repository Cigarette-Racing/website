import React from 'react'
import { Typography } from '../atoms/typography'

const FormatTextBlob = (text: string) => {
  return text
    ?.split('\n')
    ?.filter(Boolean)
    .map((p) => {
      return (
        <Typography className="mb-4 last:mb-0" key={p} variant="p2">
          {p}
        </Typography>
      )
    })
}

export default FormatTextBlob
