import React, { useState, Fragment } from 'react'
import clsx from 'clsx'
import Headroom from 'react-headroom'
import logo from '../images/logo-white.svg'
import { Typography } from '../atoms/typography'
import { MenuIcon } from '../svgs/icons'
import { ReturnLink } from '../atoms/return-link'
import {
  useLockBodyScroll,
  useMedia,
  createGlobalState,
  useToggle,
} from 'react-use'
import Modal from 'react-modal'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

export type HeaderState = 'top' | 'pinned' | 'hidden'
export const useHeaderState = createGlobalState<HeaderState>('top')

// Hack for Storybook
Modal.setAppElement(
  typeof window !== 'undefined' && !!(window as any).STORYBOOK_ENV
    ? '#root'
    : '#___gatsby'
)

const leftLinks = [['Boats'], ['Our world'], ['The Difference']]
const rightLinks = [['Owners'], ['Store'], ['Contact', '/contact']]
const allLinks = [['Home', '/']].concat(leftLinks, rightLinks)

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [isHovering, setIsHovering] = useToggle(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobileMenu = useMedia('(max-width: 1000px)')
  const [isAtTop, setIsAtTop] = useState(true)
  const [, setHeaderState] = useHeaderState()
  useLockBodyScroll(isMenuOpen)
  // @ts-ignore
  const src: string = logo
  return (
    <Fragment>
      <Headroom
        className="absolute top-0 left-0 w-full z-40"
        onPin={() => {
          console.log('onPin')
          setHeaderState('pinned')
        }}
        onUnpin={() => {
          console.log('onUnpin')
          setHeaderState('hidden')
          setIsAtTop(false)
        }}
        onUnfix={() => {
          console.log('onUnfix')
          setHeaderState('top')
          setIsAtTop(true)
        }}
        upTolerance={12}
      >
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full text-white h-20"
        >
          <div className="max-w-7xl mx-auto h-full px-4 flex justify-between items-center">
            <div className="w-1/3 flex justify-start">
              {isMobileMenu || (!isAtTop && !isHovering) ? (
                <button
                  className="p-2 text-2xl"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <MenuIcon />
                </button>
              ) : (
                <div className="flex space-x-4 xl:space-x-6">
                  {leftLinks.map(([text]) => (
                    <ComingSoonLink key={text} text={text} />
                  ))}
                </div>
              )}
            </div>
            <div className="w-1/3 flex justify-center">
              <Link to="/">
                <img src={src} className="h-16 py-2" />
              </Link>
            </div>
            <div className="w-1/3 flex justify-end">
              {isMobileMenu || (!isAtTop && !isHovering) ? (
                <div>
                  <Link to="/contact">
                    <Typography variant="e3" className="p-2 whitespace-no-wrap">
                      Contact
                    </Typography>
                  </Link>
                </div>
              ) : (
                <div className="flex space-x-4 xl:space-x-6">
                  {rightLinks.map(([text, link]) => {
                    if (link) {
                      return (
                        <Link to={link} key={text}>
                          <Typography
                            variant="e3"
                            key={text}
                            className="p-2 whitespace-no-wrap"
                          >
                            {text}
                          </Typography>
                        </Link>
                      )
                    }
                    return <ComingSoonLink key={text} text={text} />
                  })}
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

function ComingSoonLink({ text }: { text: string }) {
  const [isActive, setIsActive] = useToggle(false)
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onFocus={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      className="relative cursor-default"
    >
      <Typography
        variant="e3"
        className={clsx('p-2 whitespace-no-wrap opacity-25', {
          invisible: isActive,
        })}
      >
        {text}
      </Typography>
      {isActive && (
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <Typography
            variant="e3"
            className="whitespace-no-wrap opacity-75 text-center"
          >
            Coming
            <br />
            Soon
          </Typography>
        </div>
      )}
    </div>
  )
}

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const location = useLocation()
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
        <div className="h-16 flex items-center">
          <ReturnLink onClick={() => setIsMenuOpen(false)}>Back</ReturnLink>
        </div>
        <div className="mt-10 flex flex-col items-start">
          {allLinks.map(([text, link]) => {
            if (link) {
              return (
                <Link
                  key={text}
                  to={link}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-2 mb-2"
                >
                  <div className="relative">
                    <Typography variant="h4">{text}</Typography>
                    {location.pathname === link && (
                      <div className="absolute border-b border-t border-red w-full top-1/2"></div>
                    )}
                  </div>
                </Link>
              )
            }
            return (
              <div key={text} className="relative">
                <ComingSoonMobileLink text={text} />
              </div>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}

function ComingSoonMobileLink({ text }: { text: string }) {
  const [isActive, setIsActive] = useToggle(false)
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onFocus={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      className="relative cursor-default py-2 mb-2"
    >
      <Typography
        variant="h4"
        className={clsx('whitespace-no-wrap opacity-25', {
          'opacity-50': isActive,
        })}
      >
        {isActive ? 'Coming Soon' : text}
      </Typography>
    </div>
  )
}
