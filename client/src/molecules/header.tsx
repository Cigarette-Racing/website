import React from 'react'
import clsx from 'clsx'
import logo from '../images/logo-white.svg'
import { Typography } from '../atoms/typography'

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className="bg-black bg-opacity-50 flex justify-between items-center text-white h-20">
      <Typography variant="e3">Hamburger</Typography>
      <img src={logo} className="h-16 py-2" />
      <Typography variant="e3">Contact</Typography>
    </div>
  )
}
