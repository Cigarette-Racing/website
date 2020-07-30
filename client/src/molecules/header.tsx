import React, { useState, Fragment, useEffect, useRef, useMemo } from 'react'
import clsx from 'clsx'
import Headroom from 'react-headroom'
import logo from '../images/logo-white.svg'
import { Typography } from '../atoms/typography'
import { MenuIcon, ArrowIcon } from '../svgs/icons'
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
import { StatBlock } from '../atoms/stat-block'
import { throttle } from 'throttle-debounce'
import { AspectRatio } from '../atoms/aspect-ratio'
import { motion, Variants } from 'framer-motion'
import arrowWithCircleSvg from '../images/arrow-with-circle.svg'
import { MobileBoatSelector } from './header/mobile-boat-selector'
import { useBoatsQuery } from './header/header-data'

export type HeaderState = 'top' | 'pinned' | 'hidden'
export const useHeaderState = createGlobalState<HeaderState>('top')

// Hack for Storybook
Modal.setAppElement(
  typeof window !== 'undefined' && !!(window as any).STORYBOOK_ENV
    ? '#root'
    : '#___gatsby'
)

type LinkItem = {
  text: string
  link?: string
  section?: string
}

const leftLinks: LinkItem[] = [
  { text: 'Boats', section: 'boats' },
  { text: 'Our world' },
  { text: 'The Difference' },
]
const rightLinks: LinkItem[] = [
  { text: 'Owners' },
  { text: 'Store' },
  { text: 'Contact', link: '/contact' },
]
const allLinks = [{ text: 'Home', link: '/' } as LinkItem].concat(
  leftLinks,
  rightLinks
)

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [isHovering, setIsHovering] = useToggle(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedSection, setSelectedSection] = useState('')
  const isMobileMenu = useMedia('(max-width: 767px)')
  const [isAtTop, setIsAtTop] = useState(true)
  const [, setHeaderState] = useHeaderState()
  useLockBodyScroll(isMenuOpen || !!selectedSection)

  // @ts-ignore
  const src: string = logo

  const renderLinks = ({ text, link, section }: LinkItem): JSX.Element => {
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
    if (section) {
      return (
        <button
          className="relative"
          onClick={() => {
            if (selectedSection === section) {
              setIsMenuOpen(false)
              setSelectedSection('')
            } else {
              setIsMenuOpen(true)
              setSelectedSection(section)
            }
          }}
          key={text}
        >
          <Typography
            variant="e3"
            key={text}
            className="p-2 whitespace-no-wrap"
          >
            {text}
          </Typography>
          {selectedSection === section && (
            <div className="absolute border-t border-red w-full top-1/2 -mt-px"></div>
          )}
        </button>
      )
    }
    return <ComingSoonLink key={text} text={text} />
  }

  return (
    <Fragment>
      <Headroom
        className={clsx('absolute top-0 left-0 w-full z-40', {
          'bg-black': selectedSection !== '',
        })}
        onPin={() => {
          setHeaderState('pinned')
        }}
        onUnpin={() => {
          setHeaderState('hidden')
          setIsAtTop(false)
        }}
        onUnfix={() => {
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
                  {leftLinks.map(renderLinks)}
                </div>
              )}
            </div>
            <div className="w-1/3 flex justify-center">
              <Link to="/">
                <img src={src} alt="Cigarette Racing" className="h-16 py-2" />
                <span className="sr-only">Home</span>
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
                  {rightLinks.map(renderLinks)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Headroom>
      <BoatSelector
        isVisible={selectedSection === 'boats' && !isMobileMenu}
        onReset={() => setSelectedSection('')}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen && isMobileMenu}
        setIsMenuOpen={setIsMenuOpen}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
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
  selectedSection,
  setSelectedSection,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedSection: string
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>
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
        {selectedSection === '' ? (
          <Fragment>
            <div className="h-16 flex items-center">
              <ReturnLink onClick={() => setIsMenuOpen(false)}>Back</ReturnLink>
            </div>
            <div className="mt-10 flex flex-col items-start">
              {allLinks.map(({ text, link, section }) => {
                if (link) {
                  return (
                    <Link
                      key={text}
                      to={link}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-2 mb-2"
                    >
                      <div className="relative">
                        <Typography variant="h3">{text}</Typography>
                        {location.pathname === link && (
                          <div className="absolute border-b border-t border-red w-full top-1/2"></div>
                        )}
                      </div>
                    </Link>
                  )
                }
                if (section) {
                  return (
                    <button
                      className="relative mb-2"
                      onClick={() => {
                        if (selectedSection === section) {
                          setSelectedSection('')
                        } else {
                          setSelectedSection(section)
                        }
                      }}
                      key={text}
                    >
                      <Typography variant="h3">{text}</Typography>
                    </button>
                  )
                }
                return (
                  <div key={text} className="relative">
                    <ComingSoonMobileLink text={text} />
                  </div>
                )
              })}
            </div>
          </Fragment>
        ) : selectedSection === 'boats' ? (
          <MobileBoatSelector
            onReturn={() => setSelectedSection('')}
            onClose={() => {
              setIsMenuOpen(false)
              setSelectedSection('')
            }}
          />
        ) : null}
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
        variant="h3"
        className={clsx('whitespace-no-wrap opacity-25', {
          'opacity-50': isActive,
        })}
      >
        {isActive ? 'Coming Soon' : text}
      </Typography>
    </div>
  )
}

function BoatSelector({
  isVisible,
  onReset,
}: {
  isVisible: boolean
  onReset: () => void
}) {
  const [boatIndex, setBoatIndex] = useState(0)
  const boats = useBoatsQuery()

  useEffect(() => {
    setBoatIndex(0)
  }, [isVisible])

  const listenerProps = useOnMobileScroll(
    throttle(300, true, (deltaY: number): void => {
      if (isNaN(deltaY)) return
      const step = deltaY > 0 ? 1 : -1
      setBoatIndex((index) =>
        Math.min(Math.max(0, index + step), boats.length - 1)
      )
    })
  )

  return (
    <Modal
      isOpen={isVisible}
      className={{ base: 'absolute inset-0', afterOpen: '', beforeClose: '' }}
      overlayClassName="fixed inset-0 z-30"
      onRequestClose={() => {}}
    >
      <div
        className={clsx(
          'relative h-screen bg-black flex flex-col text-white pt-20 overflow-y-auto'
        )}
        role="dialog"
        aria-modal="true"
        {...listenerProps}
      >
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl overflow-hidden flex">
            <AspectRatio ratio="3:2" className="w-screen">
              <img
                src={
                  boats[boatIndex].backgroundMedia.image.childImageSharp?.fluid
                    ?.src!
                }
                alt=""
                className="absolute h-full w-full object-cover"
              />
              <div className="bg-black opacity-50 absolute inset-0"></div>
            </AspectRatio>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full">
          <div className="max-w-5xl xl:max-w-6xl mx-auto relative top-1/2 -mt-16 px-8">
            {boats.map((boat, index) => {
              const collapsedHeight = 56
              const highlightedHeight = 140
              const stiffness = 90
              const marginY = 40
              const parentAnimation =
                index !== boatIndex
                  ? {
                      height: collapsedHeight,
                      translateY:
                        (index - boatIndex) * (collapsedHeight + marginY) +
                        (index > boatIndex
                          ? highlightedHeight - marginY * 1.5
                          : 0),
                      scale: 0.85,
                      transition: {
                        stiffness,
                      },
                    }
                  : {
                      height: highlightedHeight,
                      translateY: 0,
                      scale: 1,
                      transition: {
                        stiffness,
                      },
                    }
              const titleVariants: Variants = {
                enter: {
                  opacity: 0.4,
                },
                animate: {
                  opacity: 1,
                },
              }
              const linkVariants: Variants = {
                enter: {
                  opacity: 0,
                  y: 10,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.15,
                    delay: 0.2,
                  },
                },
              }
              return (
                <motion.div
                  key={boat.boatName}
                  initial={false}
                  animate={parentAnimation}
                  className="absolute top-0 left-0  px-8"
                >
                  <Link
                    to={index === boatIndex ? boat.slug! : '#'}
                    onClick={(event) => {
                      if (index !== boatIndex) {
                        event.preventDefault()
                        setBoatIndex(index)
                      } else {
                        onReset()
                      }
                    }}
                  >
                    <motion.div
                      variants={titleVariants}
                      initial="enter"
                      animate={index === boatIndex ? 'animate' : 'enter'}
                      exit="enter"
                    >
                      <Typography variant="h1" className="mb-4 text-5xl">
                        {boat.menuName}
                      </Typography>
                    </motion.div>
                    <motion.div
                      variants={linkVariants}
                      initial={index === boatIndex ? false : 'enter'}
                      animate={index === boatIndex ? 'animate' : 'enter'}
                      exit="enter"
                    >
                      <Typography
                        variant="e2"
                        className="flex space-x-6 items-center"
                      >
                        <span>View Model</span>{' '}
                        <ArrowIcon className="text-red text-xl" />
                      </Typography>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
        <div className="fixed w-full bottom-0">
          <div className="flex space-x-8 w-min-content mx-auto pb-10">
            {boats[boatIndex].stats.map((stat) => (
              <div key={stat.label} className="w-48">
                <StatBlock
                  label={stat.label}
                  percentage={stat.percentage}
                  text={stat.text}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full mb-8">
          <div className="max-w-8xl mx-auto">
            <ScrollPrompter className="" />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export const useOnMobileScroll = (callback: (deltaY: number) => void) => {
  const yRef = useRef(0)
  return useMemo(() => {
    const onTouchStart: React.TouchEventHandler = (event) => {
      yRef.current = event.changedTouches[0].screenY
    }
    const onTouchEnd: React.TouchEventHandler = (event) => {
      callback(yRef.current - event.changedTouches[0].screenY)
      yRef.current = 0
    }
    const onWheel: React.WheelEventHandler = (event) => {
      if (Math.abs(event.deltaY) < 10) return
      callback(event.deltaY)
    }
    return {
      onTouchStart,
      onTouchEnd,
      onWheel,
    }
  }, [])
}

export const ScrollPrompter = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'p-4 writing-mode-vertical transform rotate-180 pointer-events-none flex space-y-6',
        className
      )}
    >
      <img src={arrowWithCircleSvg} alt="" className="transform rotate-180" />
      <Typography variant="e3" theme="dark" className="whitespace-no-wrap">
        Scroll
      </Typography>
    </div>
  )
}
