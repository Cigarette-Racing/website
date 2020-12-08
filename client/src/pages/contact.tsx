import React from 'react'
import clsx from 'clsx'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
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
import { useMetadataQuery } from '../services/metadata'

const ContactPage = (props: PageProps<GatsbyTypes.ContactImagesQuery>) => {
  const metadata = useMetadataQuery()
  const {
    data: { craftAPI: data },
  } = props

  return (
    <Layout>
      <SEO
        title="Contact Us"
        slug={props.path}
        image={data.entry.heroBackground[0].image[0].url!}
      />
      <Section
        theme="dark"
        className="min-h-screen flex justify-center items-center text-center"
      >
        <FullBgImage image={data.entry.heroBackground[0].image[0].url!} />
        <div className="relative">
          <Typography variant="h1" className="mb-8">
            {data.entry.title}
          </Typography>
          <Typography variant="e1">{data.entry.subtitle}</Typography>
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
                <a href={`tel:${metadata.phoneNumber?.raw}`}>
                  {metadata.phoneNumber?.pretty}
                </a>
              </IconWithContent>
              <IconWithContent icon={MapIcon}>
                <address className="not-italic">
                  {metadata.address?.street}, <br className="lg:hidden" />
                  {metadata.address?.city}, {metadata.address?.state}{' '}
                  {metadata.address?.zip}
                </address>
              </IconWithContent>
            </div>
          </div>
          <div className="space-y-16 text-center py-20 lg:w-1/3 lg:space-y-8 lg:text-left lg:flex flex-col justify-center">
            <Typography variant="e1" className="lg:pl-2">
              Stay Connected
            </Typography>
            <div className="flex justify-center space-x-16 text-2xl lg:justify-start">
              <IconLink
                href={metadata.socialLinks?.youtube!}
                icon={YoutubeIcon}
              />
              <IconLink
                href={metadata.socialLinks?.instagram!}
                icon={InstagramIcon}
              />
              <IconLink
                href={metadata.socialLinks?.facebook!}
                icon={FacebookIcon}
              />
            </div>
          </div>
        </div>
      </Section>
      {/* Removing for now: https://trello.com/c/X44hNZIA/182-disable-owner-support-media-press-inquiries-on-the-contact-page-do-not-delete-these-as-the-client-wants-to-utilize-them-in-time */}
      {/* <Section
        theme="light"
        className="py-20 divide-y divide-gray-5 md:flex md:divide-y-0 md:divide-x"
      >
        <div className="divide-y divide-gray-5 md:flex md:divide-y-0 md:divide-x max-w-6xl mx-auto w-full">
          {data.entry.contact2ColumnContent.map(
            ({ contactContentBlock: blocks }) => {
              const [block] = blocks
              return (
                <ContentColumn
                  key={block.header}
                  header={block.header}
                  buttonText={
                    block.buttonLabel || metadata.emailAddresses?.[block.email]!
                  }
                  copy={block.text}
                  email={metadata.emailAddresses?.[block.email]!}
                />
              )
            }
          )}
        </div>
      </Section> */}
      <Section theme="dark" className="py-24 lg:py-48">
        <FullBgImage
          image={data.entry.careers[0].singleMedia[0].image[0].url}
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="relative bg-black bg-opacity-75 px-4 py-24 md:py-32 text-center space-y-12 max-w-2xl mx-auto">
          <Typography variant="h3" md="h2">
            {data.entry.careers[0].contactContentBlock[0].header}
          </Typography>
          <InPageCta
            variant="secondary"
            theme="dark"
            href={`mailto:${
              metadata.emailAddresses?.[
                data.entry.careers[0].contactContentBlock[0].email
              ]
            }`}
            link
          >
            {data.entry.careers[0].contactContentBlock[0].buttonLabel ||
              metadata.emailAddresses?.[
                data.entry.careers[0].contactContentBlock[0].email
              ]}
          </InPageCta>
        </div>
      </Section>
      {/* Removing for now: https://trello.com/c/X44hNZIA/182-disable-owner-support-media-press-inquiries-on-the-contact-page-do-not-delete-these-as-the-client-wants-to-utilize-them-in-time */}
      {/* <Section theme="dark" className="py-32">
        <div className="space-y-8 text-center lg:hidden">
          <Typography variant="h3">{data.entry.support[0].header}</Typography>
          <Typography variant="p3">{data.entry.support[0].text}</Typography>
          <InPageCta
            variant="secondary"
            theme="dark"
            href={`mailto:${
              metadata.emailAddresses?.[data.entry.support[0].email]
            }`}
            link
          >
            {data.entry.support[0].buttonLabel ||
              metadata.emailAddresses?.[data.entry.support[0].email]}
          </InPageCta>
        </div>
        <div className="hidden lg:flex justify-between max-w-4xl xl:max-w-5xl mx-auto">
          <div>
            <Typography variant="h2">{data.entry.support[0].header}</Typography>
          </div>
          <div className="space-y-8 pt-4">
            <Typography variant="p2" className="max-w-md">
              {data.entry.support[0].text}
            </Typography>
            <InPageCta
              variant="secondary"
              theme="dark"
              href={`mailto:${
                metadata.emailAddresses?.[data.entry.support[0].email]
              }`}
              link
            >
              {data.entry.support[0].buttonLabel ||
                metadata.emailAddresses?.[data.entry.support[0].email]}
            </InPageCta>
          </div>
        </div>
      </Section> */}
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query Contact {
    craftAPI {
      entry(slug: "contact") {
        ... on CraftAPI_contact_contact_Entry {
          subtitle: textBlockCopy
          title: textBlockHeader
          heroBackground: singleMedia {
            ... on CraftAPI_singleMedia_BlockType {
              image {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
            }
          }
          contact2ColumnContent {
            ... on CraftAPI_contact2ColumnContent_column_BlockType {
              contactContentBlock {
                ... on CraftAPI_contactContentBlock_BlockType {
                  email
                  text
                  buttonLabel
                  header
                }
              }
            }
          }
          support: contactContentBlock {
            ... on CraftAPI_contactContentBlock_BlockType {
              email
              header
              buttonLabel
              text
            }
          }
          careers: contactCareers {
            ... on CraftAPI_contactCareers_careers_BlockType {
              contactContentBlock {
                ... on CraftAPI_contactContentBlock_BlockType {
                  email
                  text
                  header
                  buttonLabel
                }
              }
              singleMedia {
                ... on CraftAPI_singleMedia_BlockType {
                  image {
                    ... on CraftAPI_s3_Asset {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

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

function FullBgImage({ image }: { image: string }) {
  return (
    <img
      src={image}
      alt=""
      className="absolute top-0 left-0 h-full w-full object-cover"
      style={{ position: 'absolute' }}
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
