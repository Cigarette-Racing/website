import React, { useState, Fragment } from 'react'
import clsx from 'clsx'
import { Typography } from '../atoms/typography'
import { CaretDownIcon, CaretUpIcon } from '../svgs/icons'
import Modal from 'react-modal'
// import { useHeaderState } from './header'

const slugify = (str: string) =>
  str.toLowerCase().replace(/\W/g, '_').replace(/_+/, '_')

export interface InPageNavProps {
  boatName: string
  current: string
  links: string[]
  onClickInquire: React.MouseEventHandler<HTMLButtonElement>
}

export const InPageNav = ({
  boatName,
  current,
  links,
  onClickInquire,
}: InPageNavProps) => {
  // const [headerState] = useHeaderState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Fragment>
      <div
        className={clsx(
          'sticky top-0 left-0 w-full h-12 z-30 bg-gray-0 text-white flex justify-between items-center px-4 transform duration-200 ease-in-out',
          {
            // 'translate-y-20': headerState === 'pinned',
          }
        )}
      >
        <a id={slugify(current)} className="sr-only"></a>
        <button
          onClick={() => setIsMenuOpen(true)}
          type="button"
          className="flex"
        >
          <CaretDownIcon className="text-red mr-4" />
          <Typography variant="e3" as="span">
            {current === links[0] ? boatName : current}
          </Typography>
        </button>
        <Typography variant="e3" as="button">
          Inquire
        </Typography>
      </div>
      <MobileMenu
        boatName={boatName}
        current={current}
        isMenuOpen={isMenuOpen}
        links={links}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Fragment>
  )
}

function MobileMenu({
  boatName,
  current,
  isMenuOpen,
  links,
  setIsMenuOpen,
}: {
  boatName: string
  current: string
  isMenuOpen: boolean
  links: string[]
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
        <button
          onClick={() => setIsMenuOpen(false)}
          className="h-20 flex items-center"
        >
          <CaretUpIcon className="text-red mr-4" />
          <Typography variant="e3">{boatName}</Typography>
        </button>
        <div className="mt-10 flex flex-col items-start">
          {links.map((link) => {
            return (
              <div key={link} className="relative mb-6">
                <a
                  href={`#${slugify(link)}`}
                  onClick={() => setIsMenuOpen(false)}
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
