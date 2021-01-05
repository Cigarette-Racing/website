import React, { useState, Fragment, useEffect, useRef, useMemo } from 'react'
import clsx from 'clsx'
import Headroom from 'react-headroom'
import Img from 'gatsby-image'
import { useFooterMenuState } from './footer'
import logo from '../images/logo-white.svg'
import { Typography } from '../atoms/typography'
import { MenuIcon, ArrowIcon } from '../svgs/icons'
import { ReturnLink } from '../atoms/return-link'
import {
  useLockBodyScroll,
  useMedia,
  createGlobalState,
  useToggle,
  useScroll,
} from 'react-use'
import Modal from 'react-modal'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { StatBlock } from '../atoms/stat-block'
import { AspectRatio } from '../atoms/aspect-ratio'
import { motion, AnimatePresence } from 'framer-motion'
import arrowWithCircleSvg from '../images/arrow-with-circle.svg'
import { MobileBoatSelector } from './header/mobile-boat-selector'
import {
  useBoatsQuery,
  HeaderBoatMenuCategories,
  categoriesToDisplay,
  HeaderBoat,
} from './header/header-data'
import { cacheImages } from '../services/images'
import clamp from 'lodash/clamp'

export type MenuState = true | false
export const useMenuState = createGlobalState<MenuState>(false)

export type HeaderState = 'top' | 'pinned' | 'hidden'
export const useHeaderState = createGlobalState<HeaderState>('top')
export const useSelectedSectionState = createGlobalState('')
export const useSelectedBoatCategoryState = createGlobalState<
  HeaderBoatMenuCategories
>('all')

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
  // { text: 'The Difference' },
]
const rightLinks: LinkItem[] = [
  // { text: 'Owners' },
  { text: 'Store', link: 'https://cigaretteracingstore.com/' },
  { text: 'Contact', link: '/contact' },
]
const allLinks = [{ text: 'Home', link: '/' } as LinkItem].concat(
  leftLinks,
  rightLinks
)

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [isHovering, setIsHovering] = useToggle(false)
  const [selectedSection, setSelectedSection] = useSelectedSectionState()
  const isMobileMenu = useMedia('(max-width: 767px)')
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useMenuState()
  const [, setHeaderState] = useHeaderState()
  const [menuOpenedFromFooter, setMenuOpenedFromFooter] = useFooterMenuState()

  useEffect(() => {
    if (isMenuOpen || !!selectedSection) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'relative'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.position = 'static'
    }
  }, [isMenuOpen, selectedSection])

  // @ts-ignore
  const src: string = logo

  const closeMenu = () => {
    setSelectedSection('')
    setIsMenuOpen(false)
  }

  const renderLinks = ({ text, link, section }: LinkItem): JSX.Element => {
    if (link) {
      if (link.startsWith('http')) {
        return (
          <a href={link} key={text} target="_blank" rel="noopener noreferrer">
            <Typography
              variant="e2"
              key={text}
              className="p-2 whitespace-no-wrap"
            >
              {text}
            </Typography>
          </a>
        )
      }
      return (
        <Link to={link} key={text} onClick={() => closeMenu()}>
          <Typography
            variant="e2"
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
            variant="e2"
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
              {isMobileMenu && !isMenuOpen ? (
                <button
                  className="flex items-center p-2 text-2xl"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Toggle menu"
                >
                  <MenuIcon />
                  <Typography
                    variant="e2"
                    className="pl-2 whitespace-no-wrap md:hidden"
                  >
                    Menu
                  </Typography>
                </button>
              ) : (
                <div className="flex space-x-4 xl:space-x-6">
                  {leftLinks.map(renderLinks)}
                </div>
              )}
            </div>
            <div className="w-1/3 flex justify-center">
              <Link to="/" onClick={() => closeMenu()}>
                <img src={src} alt="Cigarette Racing" className="h-16 py-2" />
                <span className="sr-only">Home</span>
              </Link>
            </div>
            <div className="w-1/3 flex justify-end">
              {console.log(isMobileMenu)}
              {isMobileMenu && !isMenuOpen ? (
                <div>
                  <Link to="/contact" onClick={() => closeMenu()}>
                    <Typography variant="e2" className="p-2 whitespace-no-wrap">
                      Contact
                    </Typography>
                  </Link>
                </div>
              ) : (
                <div className="flex space-x-4 xl:space-x-6">
                  {console.log(rightLinks)}
                  {rightLinks.map(renderLinks)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Headroom>
      <BoatSelector
        isVisible={selectedSection === 'boats' && !isMobileMenu}
        menuOpenedFromFooter={!!menuOpenedFromFooter}
        onReset={closeMenu}
      />
      <MobileMenu
        isMenuOpen={!!isMenuOpen && isMobileMenu}
        setIsMenuOpen={setIsMenuOpen}
        selectedSection={selectedSection!}
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
        variant="e2"
        className={clsx('p-2 whitespace-no-wrap opacity-25', {
          invisible: isActive,
        })}
      >
        {text}
      </Typography>
      {isActive && (
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <Typography
            variant="e2"
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
  menuOpenedFromFooter,
  onReset,
}: {
  isVisible: boolean
  menuOpenedFromFooter: boolean
  onReset: () => void
}) {
  const [boatCategory, setBoatCategory] = useSelectedBoatCategoryState()
  const [boatIndex, setBoatIndex] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const boatsByCategory = useBoatsQuery()

  const boats = boatsByCategory[boatCategory] || []
  const nextIndex = boatIndex < boats.length - 1 ? boatIndex + 1 : 0
  const prevIndex = boatIndex > 0 ? boatIndex - 1 : boats.length - 1

  useEffect(() => {
    cacheImages([boats[0]?.backgroundMedia.image.publicUrl!].filter(Boolean))
  }, [])

  useEffect(() => {
    setBoatIndex(0)
    setHasScrolled(false)
  }, [isVisible])

  useEffect(() => {
    setBoatIndex(0)
  }, [boatCategory])

  return (
    <Modal
      isOpen={isVisible}
      className={{
        base: 'absolute inset-0',
        afterOpen: '',
        beforeClose: '',
      }}
      overlayClassName="fixed inset-0 z-30"
      onRequestClose={onReset}
      closeTimeoutMS={250}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={clsx(
              'relative h-screen bg-black flex flex-col text-white pt-20 overflow-y-auto'
            )}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={clsx(
                'absolute top-0 left-0 w-full h-10 bg-gray-0 z-10',
                { 'mt-20': !menuOpenedFromFooter }
              )}
            >
              <div className="max-w-7xl mx-auto px-4 flex items-center h-full space-x-12">
                {Object.keys(boatsByCategory).map(
                  (category: HeaderBoatMenuCategories) => {
                    if (!categoriesToDisplay[category]) return null
                    return (
                      <button
                        key={category}
                        className="p-2"
                        onClick={() => setBoatCategory(category)}
                      >
                        <Typography
                          variant="e3"
                          className={clsx({
                            'text-gray-3': boatCategory !== category,
                          })}
                        >
                          {categoriesToDisplay[category]}
                        </Typography>
                      </button>
                    )
                  }
                )}
              </div>
            </div>
            <BackgroundImages
              boats={boats}
              boatIndex={boatIndex}
              nextIndex={nextIndex}
              prevIndex={prevIndex}
            />
            <div className="fixed top-0 left-0 w-full h-full">
              <div className="max-w-5xl xl:max-w-6xl mx-auto relative top-1/2 -mt-16 px-8">
                <BoatScrollList
                  boats={boats}
                  boatIndex={boatIndex}
                  setBoatIndex={setBoatIndex}
                  setHasScrolled={setHasScrolled}
                  onReset={onReset}
                />
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
            <div className="fixed bottom-0 left-0 w-full mb-8 pointer-events-none">
              <div className="max-w-8xl mx-auto">
                <motion.div animate={{ opacity: hasScrolled ? 0 : 1 }}>
                  <ScrollPrompter />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  )
}

const imageAnimations = {
  initial: {
    opacity: 0,
  },
  animate: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0.5,
  },
  transition: {
    opacity: { duration: 0.2 },
  },
}

function BackgroundImages({
  boats,
  boatIndex,
  nextIndex,
  prevIndex,
}: {
  boats: HeaderBoat[]
  boatIndex: number
  nextIndex: number
  prevIndex: number
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl overflow-hidden flex">
        <AspectRatio ratio="3:2" className="w-screen">
          <AnimatePresence>
            <motion.img
              key={boatIndex}
              {...imageAnimations}
              src={boats[boatIndex]?.backgroundMedia.image.publicUrl}
              alt={boats[boatIndex]?.backgroundMedia.alt || ''}
              className="absolute h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="bg-black opacity-50 absolute inset-0 z-10"></div>
        </AspectRatio>
      </div>
      <div
        className="absolute max-w-xl lg:max-w-2xl xl:max-w-3xl"
        style={{ right: 'calc(100% - 4vw)' }}
      >
        <AspectRatio ratio="3:2" className="w-screen max-w-full">
          <AnimatePresence>
            <motion.img
              key={prevIndex}
              {...imageAnimations}
              src={boats[prevIndex]?.backgroundMedia.image.publicUrl}
              alt={boats[prevIndex]?.backgroundMedia.alt || ''}
              className="absolute h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="bg-black opacity-50 absolute inset-0 z-10"></div>
        </AspectRatio>
      </div>
      <div
        className="absolute max-w-xl lg:max-w-2xl xl:max-w-3xl"
        style={{ left: 'calc(100% - 4vw)' }}
      >
        <AspectRatio ratio="3:2" className="w-screen max-w-full">
          <AnimatePresence>
            <motion.img
              key={nextIndex}
              {...imageAnimations}
              src={boats[nextIndex]?.backgroundMedia.image.publicUrl}
              alt={boats[nextIndex]?.backgroundMedia.alt || ''}
              className="absolute h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="bg-black opacity-50 absolute inset-0 z-10"></div>
        </AspectRatio>
      </div>
    </div>
  )
}

function BoatScrollList({
  boats,
  boatIndex,
  setBoatIndex,
  setHasScrolled,
  onReset,
}: {
  boats: HeaderBoat[]
  boatIndex: number
  setBoatIndex: React.Dispatch<React.SetStateAction<number>>
  setHasScrolled: React.Dispatch<React.SetStateAction<boolean>>
  onReset: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { y } = useScroll(scrollRef)

  useEffect(() => {
    if (y === 0) return
    setHasScrolled(true)
  }, [y])

  const ITEM_HEIGHT = 140
  const innerHeight = boats.length * ITEM_HEIGHT
  const outerHeight = innerHeight * 2
  const outerMarginOffset = innerHeight * -1

  useEffect(() => {
    const currentlyHighlightedIndex = Math.round(y / ITEM_HEIGHT)
    setBoatIndex(clamp(currentlyHighlightedIndex, 0, boats.length - 1))
  }, [y])

  return (
    <div
      className="overflow-x-hidden overflow-y-visible"
      style={{ height: outerHeight, marginTop: outerMarginOffset }}
    >
      <div
        className="overflow-x-hidden overflow-y-scroll -mr-8"
        style={{
          height: innerHeight,
          paddingTop: innerHeight,
          paddingBottom: innerHeight,
        }}
        ref={scrollRef}
      >
        {boats.map((boat, index) => {
          const isCurrentThreshold = ITEM_HEIGHT / 2
          const top = innerHeight + ITEM_HEIGHT * index - y
          // console.log('top', top)
          const absoluteOffsetFromCenter = Math.abs(innerHeight - top)
          const animationPercentage =
            absoluteOffsetFromCenter < isCurrentThreshold
              ? 1
              : absoluteOffsetFromCenter >= ITEM_HEIGHT
              ? 0
              : convertPercentageToExponentialEasing(
                  Math.abs(absoluteOffsetFromCenter - isCurrentThreshold * 2),
                  isCurrentThreshold
                )
          // console.log('animationPercentage', animationPercentage)
          const scale = 0.85 + 0.15 * animationPercentage
          const opacity = 0.4 + 0.6 * animationPercentage
          return (
            <motion.div
              animate={{
                scale,
                opacity,
                transition: { stiffness: 90, duration: 0.2 },
              }}
              style={{ margin: '10px 0' }}
            >
              <Link
                to={index === boatIndex ? `/boats/${boat.slug!}` : '#'}
                onClick={(event) => {
                  if (index !== boatIndex) {
                    event.preventDefault()
                    scrollRef.current!.scrollTo({
                      left: 0,
                      top: ITEM_HEIGHT * index,
                      behavior: 'smooth',
                    })
                  } else {
                    onReset()
                  }
                }}
              >
                <motion.div>
                  <Typography variant="h1" className="mb-4 text-5xl">
                    {boat.menuName}
                  </Typography>
                </motion.div>
                <motion.div animate={{ opacity: index === boatIndex ? 1 : 0 }}>
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
  )
}

function convertPercentageToExponentialEasing(
  divisor: number,
  dividend: number
) {
  const power = 3
  return divisor ** power / dividend ** power
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
