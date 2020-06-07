import React from 'react'
import { SocialLink } from '../../src/atoms/social-link'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../../src/svgs/icons'

export default {
  title: 'Atoms/Social Link',
  component: SocialLink,
}

const linkVariants = [
  { icon: FacebookIcon, text: 'Facebook', href: '#' },
  { icon: InstagramIcon, text: 'Instagram', href: '#' },
  { icon: YoutubeIcon, text: 'Youtube', href: '#' },
]

export const Sandbox = () => {
  return (
    <div className="space-y-8">
      {linkVariants.map((linkVariant) => {
        return <SocialLink {...linkVariant} />
      })}
    </div>
  )
}
