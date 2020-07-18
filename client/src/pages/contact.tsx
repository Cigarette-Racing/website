import React from 'react'
import clsx from 'clsx'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import {
  PhoneIcon,
  MailIcon,
  MapIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
} from '../svgs/icons'
import { InPageCta } from '../atoms/in-page-cta'
import { Theme } from '../types/shared'

// images
import headerImage from '../../content/images/contact-header.jpeg'
import footerImage from '../../content/images/contact-footer.png'
import { useMetadataQuery } from '../services/metadata'

const ContactPage = () => {
  const metadata = useMetadataQuery()

  return (
    <Layout>
      <SEO title="Contact Us" />
      <Section
        theme="dark"
        className="min-h-screen flex justify-center items-center text-center"
      >
        <FullBgImage src={headerImage} />
        <div className="relative">
          <Typography variant="h1" className="mb-8">
            Born & Made
          </Typography>
          <Typography variant="e1">Miami, Florida</Typography>
        </div>
      </Section>
      <Section theme="dark" className="py-20 lg:py-12">
        <div className="divide-y divide-gray-2 lg:flex lg:divide-y-0 max-w-6xl mx-auto justify-between">
          <div className="relative lg:w-7/12 xl:w-1/2">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 font-heading text-center leading-none text-gray-1 lg:flex"
              style={{ fontSize: '22.5rem', lineHeight: 0.9 }}
            >
              <div>H</div>
              <div>Q</div>
            </div>
            <div className="relative space-y-24 text-center py-20 lg:space-y-12 lg:pl-24 lg:py-12">
              <IconWithContent icon={PhoneIcon}>
                <a href={`tel:${metadata?.phoneNumber?.raw}`}>
                  {metadata?.phoneNumber?.pretty}
                </a>
              </IconWithContent>
              <IconWithContent icon={MailIcon}>
                <a href={`mailto:${metadata?.email?.hello}`}>
                  {metadata?.email?.hello}
                </a>
              </IconWithContent>
              <IconWithContent icon={MapIcon}>
                <address className="not-italic">
                  {metadata?.address?.street}, <br className="lg:hidden" />
                  {metadata?.address?.city}, {metadata?.address?.state}{' '}
                  {metadata?.address?.zip}
                </address>
              </IconWithContent>
            </div>
          </div>
          <div className="space-y-16 text-center py-20 lg:w-1/3 lg:space-y-8 lg:text-left lg:flex flex-col justify-center">
            <Typography variant="e1" className="lg:pl-2">
              Stay Connected
            </Typography>
            <div className="flex justify-center space-x-16 text-2xl lg:justify-start">
              <IconLink href={metadata?.social?.youtube!} icon={YoutubeIcon} />
              <IconLink
                href={metadata?.social?.instagram!}
                icon={InstagramIcon}
              />
              <IconLink
                href={metadata?.social?.facebook!}
                icon={FacebookIcon}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        theme="light"
        className="py-20 divide-y divide-gray-5 md:flex md:divide-y-0 md:divide-x"
      >
        <div className="divide-y divide-gray-5 md:flex md:divide-y-0 md:divide-x max-w-6xl mx-auto w-full">
          <ContentColumn
            header="Inquiries"
            buttonText="Request An Appointment"
            copy="Your Cigarette Racing journey begins here. Request info and schedule an appointment today."
            email={metadata?.email?.support!}
          />
          <ContentColumn
            header="Media & Press"
            buttonText="Get In Touch"
            copy="From press kits to partnerships — lets work together towards something great."
            email={metadata?.email?.support!}
          />
        </div>
      </Section>
      <Section theme="dark" className="py-24 lg:py-48">
        <FullBgImage src={footerImage} />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="relative bg-black bg-opacity-75 px-4 py-24 md:py-32 text-center space-y-12 max-w-2xl mx-auto">
          <Typography variant="h3" md="h2">
            Work at Cigarette
          </Typography>
          <InPageCta
            variant="secondary"
            theme="dark"
            href={`mailto:${metadata?.email?.support}`}
            link
          >
            Start a Career
          </InPageCta>
        </div>
      </Section>
      <Section theme="dark" className="py-32">
        <div className="space-y-8 text-center lg:hidden">
          <Typography variant="h3">Owner support</Typography>
          <Typography variant="p3">
            Whatever you need, our team is dedicated to help you get the most
            out of your Cigarette Racing boat.
          </Typography>
          <InPageCta
            variant="secondary"
            theme="dark"
            href={`mailto:${metadata?.email?.support}`}
            link
          >
            {metadata?.email?.support}
          </InPageCta>
        </div>
        <div className="hidden lg:flex justify-between max-w-4xl xl:max-w-5xl mx-auto">
          <div>
            <Typography variant="h2">Owner support</Typography>
          </div>
          <div className="space-y-8 pt-4">
            <Typography variant="p2" className="max-w-md">
              Whatever you need, our team is dedicated to help you get the most
              out of your Cigarette Racing boat.
            </Typography>
            <InPageCta
              variant="secondary"
              theme="dark"
              href={`mailto:${metadata?.email?.support}`}
              link
            >
              {metadata?.email?.support}
            </InPageCta>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default ContactPage

function Section({
  theme,
  className,
  ...props
}: { theme: Theme } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      {...props}
      className={clsx(
        'relative px-4',
        {
          'bg-gray-0 text-white': theme === 'dark',
          'bg-white text-black': theme === 'light',
        },
        className
      )}
    />
  )
}

function FullBgImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="absolute top-0 left-0 h-full w-full object-cover"
    />
  )
}

function IconWithContent({
  icon: Icon,
  children,
}: {
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6 lg:flex lg:space-y-0 justify-start items-center lg:space-x-6">
      <div className="mx-auto text-2xl border border-white rounded-full w-16 h-16 flex items-center justify-center lg:m-0">
        <Icon />
      </div>
      <Typography variant="p1">{children}</Typography>
    </div>
  )
}

function ContentColumn({
  header,
  copy,
  buttonText,
  email,
}: {
  header: string
  copy?: string
  buttonText: string
  email: string
}) {
  return (
    <div className="text-center space-y-8 py-16 md:py-32 xl:py-48 md:w-1/2">
      <Typography variant="h3" lg="h2">
        {header}
      </Typography>
      {copy && (
        <Typography variant="p3" lg="p2" className="w-5/6 md:w-3/4 mx-auto">
          {copy}
        </Typography>
      )}
      <InPageCta
        variant="secondary"
        theme="light"
        href={`mailto:${email}`}
        link
      >
        {buttonText}
      </InPageCta>
    </div>
  )
}

function IconLink({
  icon: Icon,
  href,
}: {
  icon: React.ElementType
  href: string
}) {
  return (
    <a href={href} target="_blank" className="p-2">
      <Icon />
    </a>
  )
}
