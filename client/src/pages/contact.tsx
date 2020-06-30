import React from 'react'
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

// images
import headerImage from '../../content/images/contact-header.jpeg'
import footerImage from '../../content/images/contact-footer.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <section className="relative px-4 min-h-screen flex justify-center items-center bg-black text-white text-center">
      <img
        src={headerImage}
        alt=""
        className="absolute top-0 left-0 h-screen w-full object-cover"
      />
      <div className="relative">
        <Typography variant="h1" className="mb-8">
          Born & Made
        </Typography>
        <Typography variant="e1">Miami, Florida</Typography>
      </div>
    </section>
    <section className="relative px-4 bg-gray-0 text-white py-20 lg:py-12">
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
            <div className="space-y-6 lg:flex lg:space-y-0 justify-start items-center lg:space-x-6">
              <div className="mx-auto text-2xl border border-white rounded-full w-16 h-16 flex items-center justify-center lg:m-0">
                <PhoneIcon />
              </div>
              <Typography variant="p1">
                <a href="tel:+13059314564">+1 305-931-4564</a>
              </Typography>
            </div>
            <div className="space-y-6 lg:flex lg:space-y-0 justify-start items-center lg:space-x-6">
              <div className="mx-auto text-2xl border border-white rounded-full w-16 h-16 flex items-center justify-center lg:m-0">
                <MailIcon />
              </div>
              <Typography variant="p1">
                <a href="hello@cigaretteracing.com">
                  hello@cigaretteracing.com
                </a>
              </Typography>
            </div>
            <div className="space-y-6 lg:flex lg:space-y-0 justify-start items-center lg:space-x-6">
              <div className="mx-auto text-2xl border border-white rounded-full w-16 h-16 flex items-center justify-center lg:m-0">
                <MapIcon />
              </div>
              <Typography variant="p1">
                <address className="not-italic">
                  4355 NW 128th St, <br className="lg:hidden" />
                  Opa-locka, FL 33054
                </address>
              </Typography>
            </div>
          </div>
        </div>
        <div className="space-y-16 text-center py-20 lg:w-1/3 lg:space-y-8 lg:text-left lg:flex flex-col justify-center">
          <Typography variant="e1" className="lg:pl-2">
            Stay Connected
          </Typography>
          <div className="flex justify-center space-x-16 text-2xl lg:justify-start">
            <a href="https://example.com" target="_blank" className="p-2">
              <YoutubeIcon />
            </a>
            <a href="https://example.com" target="_blank" className="p-2">
              <InstagramIcon />
            </a>
            <a href="https://example.com" target="_blank" className="p-2">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="relative bg-white text-black px-4 py-20 divide-y divide-gray-5 md:flex md:divide-y-0 md:divide-x">
      <div className="divide-y divide-gray-5 md:flex md:divide-y-0 md:divide-x max-w-6xl mx-auto">
        <div className="text-center space-y-8 py-16 md:py-32 xl:py-48">
          <Typography variant="h3" lg="h2">
            Inquiries
          </Typography>
          <Typography variant="p3" lg="p2" className="w-5/6 md:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </Typography>
          <InPageCta variant="secondary" theme="light">
            Request Info
          </InPageCta>
        </div>
        <div className="text-center space-y-8 py-16 md:py-32 xl:py-48">
          <Typography variant="h3" lg="h2">
            Media & Press
          </Typography>
          <Typography variant="p3" lg="p2" className="w-5/6 md:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </Typography>
          <InPageCta variant="secondary" theme="light">
            Get In Touch
          </InPageCta>
        </div>
      </div>
    </section>
    <section className="relative px-4 py-24 lg:py-48 bg-black text-white">
      <img
        src={footerImage}
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-black bg-opacity-75 px-4 py-24 md:py-32 text-center space-y-12 max-w-2xl mx-auto">
        <Typography variant="h3" md="h2">
          Work at Cigarette
        </Typography>
        <InPageCta variant="secondary" theme="dark">
          Start a Career
        </InPageCta>
      </div>
    </section>
    <section className="bg-gray-0 px-4 py-32 text-white">
      <div className="space-y-8 text-center lg:hidden">
        <Typography variant="h3">Owner support</Typography>
        <Typography variant="p3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>
        <InPageCta variant="secondary" theme="dark">
          support@cigaretteracing.com
        </InPageCta>
      </div>
      <div className="hidden lg:flex justify-between max-w-4xl xl:max-w-5xl mx-auto">
        <div>
          <Typography variant="h2">Owner support</Typography>
        </div>
        <div className="space-y-8 pt-4">
          <Typography variant="p2" className="max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </Typography>
          <InPageCta variant="secondary" theme="dark">
            support@cigaretteracing.com
          </InPageCta>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
