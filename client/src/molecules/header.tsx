import React, { useState, Fragment, useRef } from 'react'
import clsx from 'clsx'
import Headroom from 'react-headroom'
import logo from '../images/logo-white.svg'
import { Typography } from '../atoms/typography'
import { MenuIcon } from '../svgs/icons'
import { ReturnLink } from '../atoms/return-link'
import { useLockBodyScroll, useMedia, useHoverDirty } from 'react-use'
import Modal from 'react-modal'

// Hack for Storybook
Modal.setAppElement(!!(window as any).STORYBOOK_ENV ? '#root' : '#___gatsby')

const leftLinks = ['Models', 'Our world', 'The Difference']
const rightLinks = ['Owners', 'Store', 'Contact']
const allLinks = ['Home'].concat(leftLinks, rightLinks)

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const headerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobileMenu = useMedia('(max-width: 1000px)')
  const [isAtTop, setIsAtTop] = useState(true)
  const isHoveringOverMenu = useHoverDirty(headerRef)
  useLockBodyScroll(isMenuOpen)
  // @ts-ignore
  const src: string = logo
  return (
    <Fragment>
      <Headroom
        className="absolute top-0 left-0 w-full z-40"
        onPin={() => console.log('onPin')}
        onUnpin={() => {
          console.log('onUnpin')
          setIsAtTop(false)
        }}
        onUnfix={() => {
          console.log('onUnfix')
          setIsAtTop(true)
        }}
      >
        <div ref={headerRef} className="w-full text-white h-20">
          <div className="max-w-8xl mx-auto h-full px-4 flex justify-between items-center">
            <div className="w-1/3 flex justify-start">
              {isMobileMenu || (!isAtTop && !isHoveringOverMenu) ? (
                <button className="p-2" onClick={() => setIsMenuOpen(true)}>
                  <MenuIcon />
                </button>
              ) : (
                <div className="flex space-x-10 pointer-events-none">
                  {leftLinks.map((link) => (
                    <Typography variant="e3" key={link}>
                      {link}
                    </Typography>
                  ))}
                </div>
              )}
            </div>
            <div className="w-1/3 flex justify-center">
              <img src={src} className="h-16 py-2" />
            </div>
            <div className="w-1/3 flex justify-end">
              {isMobileMenu || (!isAtTop && !isHoveringOverMenu) ? (
                <Typography variant="e3">Contact</Typography>
              ) : (
                <div className="flex space-x-10 pointer-events-none">
                  {rightLinks.map((link) => (
                    <Typography variant="e3" key={link}>
                      {link}
                    </Typography>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Headroom>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Fragment>
  )
}

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Modal
      isOpen={isMenuOpen}
      className={{ base: 'absolute inset-0', afterOpen: '', beforeClose: '' }}
      overlayClassName="fixed inset-0 z-40"
      onRequestClose={() => setIsMenuOpen(false)}
    >
      <div
        className={clsx(
          'relative z-50 min-h-screen bg-black flex flex-col px-4 text-white',
          {
            hidden: !isMenuOpen,
            block: !!isMenuOpen,
          }
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-20 flex items-center">
          <ReturnLink onClick={() => setIsMenuOpen(false)}>Back</ReturnLink>
        </div>
        <div className="mt-10 flex flex-col items-start">
          {allLinks.map((link) => {
            return (
              <div key={link} className="relative mb-6">
                <Typography variant="h4" as="a">
                  {link}
                </Typography>
                {link.toLowerCase() === 'home' && (
                  <div className="absolute border-b border-t border-red w-full top-1/2"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}
