import React, { useState, useEffect, Fragment } from 'react'
import clsx from 'clsx'
import { Typography } from '../atoms/typography'
import { CaretDownIcon, CaretUpIcon, AngleIcon } from '../svgs/icons'
import Modal from 'react-modal'
import { useMedia, useToggle } from 'react-use'
import { useHeaderState } from './header'

const slugify = (str: string) =>
  str.toLowerCase().replace(/\W/g, '_').replace(/_+/, '_')
const extractName = (el: Element) => (el as HTMLElement).dataset.inPageNav || ''
const getCurrentAnchor = (map: Map<Element, number>) => {
  if (map.size === 0) return
  return Array.from(map.keys()).find((el) => map.get(el)! > 0)
}

export interface InPageNavProps {
  boatName: string
  titles: string[][]
  onClickInquire: (state: boolean) => void
}

export const InPageNav = ({
  boatName,
  titles,
  onClickInquire,
}: InPageNavProps) => {
  // TODO: determine if we actually want this
  // const [headerState] = useHeaderState()
  const [current, setCurrent] = useState('')
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)
  const isMobileMenu = useMedia('(max-width: 1023px)')

  useEffect(() => {
    if (!window.IntersectionObserver) return

    const anchors = Array.from(document.querySelectorAll('[data-in-page-nav]'))
    const ratiosMap = new Map(Array.from(anchors).map((el) => [el, 0]))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, intersectionRatio }) => {
          ratiosMap.set(target, intersectionRatio)
        })
        const currentAnchor = getCurrentAnchor(ratiosMap)
        if (!currentAnchor) return
        setCurrent(extractName(currentAnchor))
      },
      { threshold: [0, 1] }
    )

    anchors.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const CaretIcon = isMenuOpen ? CaretUpIcon : CaretDownIcon

  return (
    <Fragment>
      <div
        className={clsx(
          'sticky top-0 left-0 w-full z-30 text-white transform duration-200 ease-in-out'
          // { 'translate-y-20': headerState === 'pinned' }
        )}
      >
        <div className="h-12 bg-gray-0 px-4">
          <div
            className={clsx(
              'h-full flex justify-between items-center border-b border-transparent border-opacity-25 max-w-8xl mx-auto',
              { 'border-white': !isMobileMenu && isMenuOpen }
            )}
          >
            <button
              onClick={() => toggleIsMenuOpen()}
              type="button"
              className="flex items-center"
            >
              <CaretIcon className="text-red mr-4" />
              <div className="md:hidden">
                <Typography variant="e2" as="span">
                  {!!titles.length && current === titles[0][0]
                    ? boatName
                    : current}
                </Typography>
              </div>
              <div className="hidden md:flex items-center">
                <Typography variant="e2" as="span">
                  {boatName}
                </Typography>
                {!!titles.length && current !== titles[0][0] && (
                  <Fragment>
                    <AngleIcon className="h-6 mx-4" />
                    <Typography variant="e2" as="span">
                      {current}
                    </Typography>
                  </Fragment>
                )}
              </div>
            </button>
            <button
              onClick={() => {
                onClickInquire(true)
              }}
            >
              <Typography variant="e2">Inquire</Typography>
            </button>
          </div>
        </div>
        {!isMobileMenu && isMenuOpen && (
          <DropdownMenu
            current={current}
            titles={titles}
            toggleIsMenuOpen={toggleIsMenuOpen}
          />
        )}
      </div>
      <MobileMenu
        boatName={boatName}
        current={current}
        isMenuOpen={isMobileMenu && isMenuOpen}
        titles={titles}
        toggleIsMenuOpen={toggleIsMenuOpen}
      />
    </Fragment>
  )
}

export const InPageAnchor = ({ title }: { title: string }) => (
  <a
    className="absolute inset-0 -z-index-1"
    id={slugify(title)}
    data-in-page-nav={title}
  ></a>
)

function DropdownMenu({
  current,
  titles,
  toggleIsMenuOpen,
}: {
  current: string
  titles: string[][]
  toggleIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="flex justify-center items-center bg-gray-0 h-10 -mb-10 space-x-6">
      {titles.map(([long, short]) => {
        return (
          <a href={`#${slugify(long)}`} onClick={() => toggleIsMenuOpen(false)}>
            <Typography
              variant="e2"
              as="span"
              className={clsx('whitespace-no-wrap', {
                'text-red': long === current,
              })}
            >
              {short || long}
            </Typography>
          </a>
        )
      })}
    </div>
  )
}

function MobileMenu({
  boatName,
  current,
  isMenuOpen,
  titles,
  toggleIsMenuOpen,
}: {
  boatName: string
  current: string
  isMenuOpen: boolean
  titles: string[][]
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
          <Typography variant="e2">{boatName}</Typography>
        </button>
        <div className="mt-10 flex flex-col items-start">
          {titles.map(([link]) => {
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
