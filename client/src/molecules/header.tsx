import React from 'react'
import clsx from 'clsx'
import logo from '../images/logo-white.svg'
import { Typography } from '../atoms/typography'

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  // @ts-ignore
  const src: string = logo
  return (
    <div
      className="absolute top-0 left-0 w-full z-10 text-white h-20"
      style={{
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <div className="max-w-8xl mx-auto h-full px-4 flex justify-between items-center">
        <Typography variant="e3">Hamburger</Typography>
        <img src={src} className="h-16 py-2" />
        <Typography variant="e3">Contact</Typography>
      </div>
    </div>
  )
}
