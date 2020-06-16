import React, { useState, Fragment } from 'react'
import clsx from 'clsx'
import { Typography } from '../atoms/typography'
import { CaretDownIcon, CaretUpIcon, AngleIcon } from '../svgs/icons'
import Modal from 'react-modal'
import { useMedia, useToggle } from 'react-use'
// import { useHeaderState } from './header'

const slugify = (str: string) =>
  str.toLowerCase().replace(/\W/g, '_').replace(/_+/, '_')

export interface InPageNavProps {
  boatName: string
  current: string
  links: string[][]
  onClickInquire: React.MouseEventHandler<HTMLButtonElement>
}

export const InPageNav = ({
  boatName,
  current,
  links,
  onClickInquire,
}: InPageNavProps) => {
  // const [headerState] = useHeaderState()
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)
  const isMobileMenu = useMedia('(max-width: 1023px)')

  return (
    <Fragment>
      <div
        className={clsx(
          'sticky top-0 left-0 w-full z-30 text-white transform duration-200 ease-in-out',
          {
            // 'translate-y-20': headerState === 'pinned',
          }
        )}
      >
        <a id={slugify(current)} className="sr-only"></a>
        <div className="h-12 bg-gray-0 px-4">
          <div
            className={clsx(
              'h-full flex justify-between items-center border-b border-transparent border-opacity-25 max-w-8xl mx-auto',
              {
                'border-white': !isMobileMenu && isMenuOpen,
              }
            )}
          >
            <button
              onClick={() => toggleIsMenuOpen()}
              type="button"
              className="flex items-center"
            >
              <CaretDownIcon className="text-red mr-4" />
              <div className="md:hidden">
                <Typography variant="e3" as="span">
                  {current === links[0][0] ? boatName : current}
                </Typography>
              </div>
              <div className="hidden md:flex items-center">
                <Typography variant="e3" as="span">
                  {boatName}
                </Typography>
                {current !== links[0][0] && (
                  <Fragment>
                    <AngleIcon className="h-6 mx-4" />
                    <Typography variant="e3" as="span">
                      {current}
                    </Typography>
                  </Fragment>
                )}
              </div>
            </button>
            <Typography variant="e3" as="button">
              Inquire
            </Typography>
          </div>
        </div>
        {!isMobileMenu && isMenuOpen && (
          <div className="flex justify-center items-center bg-gray-0 h-10 space-x-6">
            {links.map((link) => {
              return (
                <Typography
                  variant="e3"
                  className={clsx('whitespace-no-wrap', {
                    'text-red': link[0] === current,
                  })}
                >
                  {link[1] || link[0]}
                </Typography>
              )
            })}
          </div>
        )}
      </div>
      <MobileMenu
        boatName={boatName}
        current={current}
        isMenuOpen={isMobileMenu && isMenuOpen}
        links={links}
        toggleIsMenuOpen={toggleIsMenuOpen}
      />
    </Fragment>
  )
}

function MobileMenu({
  boatName,
  current,
  isMenuOpen,
  links,
  toggleIsMenuOpen,
}: {
  boatName: string
  current: string
  isMenuOpen: boolean
  links: string[][]
  toggleIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Modal
      isOpen={isMenuOpen}
      className={{ base: 'absolute inset-0', afterOpen: '', beforeClose: '' }}
      overlayClassName="fixed inset-0 z-40"
      onRequestClose={() => toggleIsMenuOpen(false)}
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
        <button
          onClick={() => toggleIsMenuOpen(false)}
          className="h-20 flex items-center"
        >
          <CaretUpIcon className="text-red mr-4" />
          <Typography variant="e3">{boatName}</Typography>
        </button>
        <div className="mt-10 flex flex-col items-start">
          {links.map(([link]) => {
            return (
              <div key={link} className="relative mb-6">
                <a
                  href={`#${slugify(link)}`}
                  onClick={() => toggleIsMenuOpen(false)}
                >
                  <Typography variant="h5" sm="h4" as="span">
                    {link}
                  </Typography>
                </a>
                {link === current && (
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
