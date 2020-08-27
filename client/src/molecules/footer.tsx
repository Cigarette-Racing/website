import React from 'react'
import { createGlobalState } from 'react-use'
import {
  useMenuState,
  useSelectedSectionState,
  useSelectedBoatCategoryState,
} from './header'
import { useInquiryModalState } from '../molecules/inquiry/inquiry-modal'
import logo from '../images/logo-white.svg'
import { SocialLink } from '../atoms/social-link'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../svgs/icons'
import { Typography } from '../atoms/typography'
import { useMetadataQuery } from '../services/metadata'
import clsx from 'clsx'

const footerLinks = [
  {
    header: 'Our Boats',
    links: [
      {
        name: 'All Boats',
        category: 'all',
        url: null,
        clickAction: true,
      },
      {
        name: 'Center Console',
        category: 'performanceCenterConsole',
        url: null,
        clickAction: true,
      },
      {
        name: 'High Performance',
        category: 'highPerformance',
        url: null,
        clickAction: true,
      },
    ],
  },
  {
    header: 'Contact Us',
    links: [
      { name: 'Request Info', clickAction: 'openInquiryForm' },
      { name: 'Media & Press', url: 'mailto:contact@cigaretteracing.com' },
      { name: 'Careers', url: 'mailto:sbjobs@cigaretteracing.com' },
      { name: 'Support', url: 'mailto:support@cigaretteracing.com' },
    ],
  },
  {
    disabled: true,
    header: 'The Difference',
    links: [
      { name: 'Design Studio', url: '#' },
      { name: 'Performance', url: '#' },
      { name: 'Construction', url: '#' },
    ],
  },
  {
    disabled: true,
    header: 'Our World',
    links: [
      { name: 'About Us', url: '#' },
      { name: 'Brand Stories', url: '#' },
      { name: 'News & Events', url: '#' },
    ],
  },
]

const socialLinks = [
  {
    icon: FacebookIcon,
    text: 'Facebook',
    key: 'facebook',
  },
  {
    icon: InstagramIcon,
    text: 'Instagram',
    key: 'instagram',
  },
  {
    icon: YoutubeIcon,
    text: 'Youtube',
    key: 'youtube',
  },
] as const

export const useFooterMenuState = createGlobalState(false)

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const metadata = useMetadataQuery()

  // @ts-ignore
  const src: string = logo

  const [, setGlobalMenuState] = useMenuState()
  const [, setSelectedSection] = useSelectedSectionState()
  const [, setMenuOpenedFromFooter] = useFooterMenuState()
  const [, setBoatCategory] = useSelectedBoatCategoryState()
  const [, setInquiryModalState] = useInquiryModalState()

  return (
    <footer className="max-w-full lg:max-w-5xl mx-auto bg-black text-white py-24 px-4">
      <div className="mb-16 grid flex grid-cols-max-2 row-gap-16 col-gap-4 sm:grid-cols-max-4 justify-around">
        {footerLinks.map((linkGroup) => {
          return (
            <div key={linkGroup.header}>
              <Typography
                variant="e2"
                className={clsx('mb-4', { 'opacity-50': linkGroup.disabled })}
              >
                {linkGroup.header}
              </Typography>
              {linkGroup.links.map((link) => {
                return (
                  <Typography variant="p2" className="mb-1" key={link.name}>
                    {/* {link.url && <a href={link.url || '#'}>{link.name}</a>} */}
                    {linkGroup.header === 'Our Boats' && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setGlobalMenuState(true)
                          setMenuOpenedFromFooter(true)
                          setBoatCategory(link.category)
                          setSelectedSection('boats')
                        }}
                      >
                        {link.name}
                      </a>
                    )}
                    {linkGroup.header === 'Contact Us' && (
                      <div>
                        {link.clickAction && (
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              link.clickAction === 'openInquiryForm' &&
                                setInquiryModalState(true)
                            }}
                          >
                            {link.name}
                          </a>
                        )}
                        {!link.clickAction && (
                          <a href={link.url}>{link.name}</a>
                        )}
                      </div>
                      // <a href={link.url}>{link.name}</a>
                    )}
                    {linkGroup.disabled && (
                      <a
                        className="opacity-50 cursor-not-allowed"
                        href={link.url}
                      >
                        {link.name}
                      </a>
                    )}
                  </Typography>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="h-32 DISABLED__border-t border-b border-gray-1 flex justify-around items-center">
        <img
          src={src}
          alt="Cigarette Racing"
          className="w-20 hidden sm:block"
        />
        {socialLinks.map((linkProps) => {
          const href = metadata?.social?.[linkProps.key]!
          return <SocialLink {...linkProps} href={href} />
        })}
      </div>
      <div className="py-12 space-x-12 flex sm:justify-center sm:text-center">
        <img
          src={src}
          alt="Cigarette Racing"
          className="w-20 block sm:hidden"
        />
        <div className="text-gray-4">
          <Typography variant="p3">
            © {new Date().getFullYear()} Cigarette Racing. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}
