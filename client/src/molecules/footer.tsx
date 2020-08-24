import React from 'react'
import { useMenuState, useSelectedSectionState } from './header'
import logo from '../images/logo-white.svg'
import { SocialLink } from '../atoms/social-link'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../svgs/icons'
import { Typography } from '../atoms/typography'
import { useMetadataQuery } from '../services/metadata'

const footerLinks = [
  {
    header: 'Our Boats',
    links: [
      {
        name: 'All Boats',
        category: 'all',
        url: null,
        clickAction: (e) => {
          e.preventDefault()
          console.log('url Click!')
        },
      },
      {
        name: 'Center Console',
        category: 'performanceCenterConsole',
        url: null,
        clickAction: (e) => {
          e.preventDefault()
          console.log('url Click!')
        },
      },
      {
        name: 'High Performance',
        category: 'highPerformance',
        url: null,
        clickAction: (e) => {
          e.preventDefault()
          console.log('url Click!')
        },
      },
      {
        name: 'Heritage',
        url: null,
        action: () => {
          console.log('url Click!')
        },
      },
    ],
  },
  // {
  //   header: 'The Difference',
  //   links: ['Design Studio', 'Performance', 'Construction'],
  // },
  // {
  //   header: 'Our World',
  //   links: ['About Us', 'Brand Stories', 'News & Events'],
  // },
  // {
  //   header: 'Contact Us',
  //   links: ['Request Info', 'Media & Press', 'Careers', 'Support'],
  // },
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

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const metadata = useMetadataQuery()

  // @ts-ignore
  const src: string = logo

  const [globalMenuState, setGlobalMenuState] = useMenuState()
  const [selectedSection, setSelectedSection] = useSelectedSectionState()

  return (
    <footer className="max-w-full lg:max-w-5xl mx-auto bg-black text-white py-24 px-4">
      <div className="mb-16 grid flex grid-cols-max-2 row-gap-16 col-gap-4 sm:grid-cols-max-4 justify-around">
        {footerLinks.map((linkGroup) => {
          return (
            <div key={linkGroup.header}>
              <Typography variant="e3" className="mb-4">
                {linkGroup.header}
              </Typography>
              {linkGroup.links.map((link) => {
                return (
                  <Typography variant="p3" className="mb-1" key={link.name}>
                    {/* {link.url && <a href={link.url || '#'}>{link.name}</a>} */}
                    {link.clickAction && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setGlobalMenuState(true)
                          setSelectedSection('boats')
                        }}
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
