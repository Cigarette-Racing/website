import React, { useState } from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { CircleButton } from '../atoms/circle-button'
import { ContentHeader } from '../atoms/content-header'
import { onSubmitCreator } from '../services/forms'
import { CloseIcon } from '../svgs/icons'
import { PlayIcon } from '../svgs/icons'
import { CheckIcon } from '../svgs/icons'
import { AnimatePresence, motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import clsx from 'clsx'
import ReactModal from 'react-modal'
import { Form, Field } from 'react-final-form'
import {
  TextInput,
  requiredText,
  requiredEmail,
  requiredPhone,
} from '../atoms/text-input'
import { FieldSetContainer } from '../molecules/inquiry/inquiry-modal.components'
const TopVideo = ({ image, videoUrl }: { image: string; videoUrl: string }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  return (
    <AnimatePresence>
      <img
        key="image"
        src={`${image}?q=30&w=2000&fm=jpg`}
        className="absolute top-0 left-0 h-screen w-full object-cover"
      />
      <motion.div key="video" animate={{ opacity: isVideoLoaded ? 1 : 0 }}>
        <ReactPlayer
          className="absolute top-0 left-0"
          url={videoUrl}
          controls={false}
          muted
          loop
          playing
          onReady={() => {
            setIsVideoLoaded(true)
          }}
          config={{
            file: {
              attributes: {
                className: 'object-cover',
              },
            },
          }}
          width="100%"
          height="100%"
        />
      </motion.div>
    </AnimatePresence>
  )
}

const ListItem = (props) => {
  const { children } = props
  return (
    <li className="flex align-center items-center py-1">
      <span className="text-white bg-black px-2 h-8 inline-flex items-center">
        <CheckIcon />
      </span>
      <span className="leading-none pt-2 ml-2">{children}</span>
    </li>
  )
}

const SupportSectionCopy = (props) => {
  const { children } = props

  return <div className="mb-4 last:mb-0 font-body text-base">{children}</div>
}

const SupportSectionHeading = (props) => {
  const { children } = props

  return <div className="mb-4 font-body text-2xl md:text-3xl">{children}</div>
}

const SupportPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {} = props

  const SupportSectionCta = (props) => {
    const { children, className } = props

    const classes = `text-white bg-red inline-flex items-center h-16 px-8 sm:px-10 rounded-full transition-colors duration-150 ease-in-out ${className}`

    return (
      <button
        onClick={() => {
          setIsModalOpen(true)
        }}
        type="button"
        className={classes}
      >
        <span className="font-body tracking-normal">{children}</span>
      </button>
    )
  }

  const formValuesMapper = (values: any) => {
    return {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      yearMakeModel: values.yearMakeModel,
      serialNumber: values.serialNumber,
      hullID: values.hullID,
      notes: values.notes,
    }
  }

  const supportFormOnSubmit = onSubmitCreator(formValuesMapper)

  const SupportModal = () => {
    return (
      <ReactModal
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 100,
          },
          content: {
            border: 'none',
            backgroundColor: 'transparent',
            color: 'lightsteelblue',
          },
        }}
        isOpen={isModalOpen!}
        closeTimeoutMS={1000}
      >
        <div className="flex justify-center ">
          <div className="md:w-3/4 bg-white">
            <div className="relative bg-black text-white py-4 px-6">
              <div className="font-heading text-xl">
                Contact Cigarette Racing Support
              </div>
              <div className="absolute top-0 right-0 px-6 py-5">
                <CloseIcon
                  className="cursor-pointer "
                  onClick={() => {
                    return setIsModalOpen(false)
                  }}
                />
              </div>
            </div>
            <div className="px-12 py-8">
              <Form
                onSubmit={supportFormOnSubmit}
                render={({ handleSubmit }) => (
                  <form
                    name="support"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                  >
                    <div style={{ marginLeft: '-15px' }}>
                      <Field
                        component="input"
                        type="hidden"
                        name="form-name"
                        initialValue="support-form"
                      />
                      <TextInput
                        name="fullName"
                        placeholder="Full Name"
                        type="text"
                        validation={requiredText}
                        required={true}
                      />
                      <div className="md:flex w-full">
                        <TextInput
                          name="phone"
                          placeholder="Phone"
                          type="text"
                          validation={requiredText}
                          required={true}
                        />
                        <TextInput
                          name="email"
                          placeholder="Email"
                          type="text"
                          validation={requiredText}
                        />
                      </div>
                      <TextInput
                        name="yearMakeModel"
                        placeholder="Year, Make and Model"
                        type="text"
                      />
                      <div className="md:flex w-full">
                        <TextInput
                          name="serialNumber"
                          placeholder="Serial Number"
                          type="text"
                        />
                        <TextInput
                          name="hullID"
                          placeholder="Hull ID for parts"
                          type="text"
                        />
                      </div>
                    </div>
                    <Field
                      className="w-full p-4 mt-8 text-gray-1 font-body bg-gray-6 placeholder-gray-1 h-48"
                      placeholder="Leave a message for our team..."
                      name="notes"
                      component="textarea"
                    />
                    <button
                      type="submit"
                      className="text-white bg-red inline-flex items-center h-8 px-2 sm:px-10 rounded-full transition-colors duration-150 ease-in-out mt-4"
                    >
                      Submit
                    </button>
                  </form>
                )}
              />
            </div>
          </div>
        </div>
      </ReactModal>
    )
  }

  const HiddenSupportForm = () => {
    return (
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="support-form"
        hidden
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="support-form" />

        <input type="text" name="fullName" />
        <input type="text" name="phone" />
        <input type="email" name="email" />
        <input type="text" name="yearMakeModel" />
        <input type="text" name="serialNumber" />
        <input type="text" name="hullID" />
        <input type="text" name="notes" />

        <button type="submit">Submit</button>
      </form>
    )
  }

  return (
    <Layout>
      <SupportModal />
      <SEO title="Cigarette Racing Support" />
      {/* intro */}
      <section className="relative min-h-screen flex justify-start items-center overflow-hidden">
        <div className="absolute top-0 left-0 h-screen w-full">
          <TopVideo
            image=""
            videoUrl="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/cigarette-bg.mp4"
          />
        </div>
        <div
          className="absolute top-0 left-0 h-screen w-full pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 51.47%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />
        <CircleButton
          variant="primary"
          icon={PlayIcon}
          size="lg"
          className="absolute top-2/5 sm:hidden hidden"
        />
        <div className="relative z-10 pl-6 md:pl-64 sm:mb-24 text-white text-left flex flex-col items-start">
          <ContentHeader className="self-start -ml-2 sm:self-auto mb:ml-0">
            <span className="text-xl md:text-2xl capitalize font-normal">
              Welcome to
            </span>
          </ContentHeader>
          <div className="font-heading text-5xl md:text-6xl leading-tight mb-2">
            Cigarette Racing
          </div>
          <div className="mb-10 max-w-2xl sm:block text-2xl md:text-3xl font-body">
            Parts, Service, & Support
          </div>
        </div>
      </section>
      {/* We Keep You at the High-Performance Level */}
      <section className="px-10 md:px-0 relative min-h-screen flex justify-center pt-12 overflow-hidden">
        <div
          className="flex flex-col md:flex-row max-w-7xl mx-auto"
          data-block-type="HorizontalImageTextBlockComponent"
        >
          <div className="md:w-3/4 lg:w-2/3 md:mr-20">
            <SupportSectionHeading>
              We Keep You at the High-Performance Level
            </SupportSectionHeading>

            <SupportSectionCopy>
              At Cigarette Racing Support, we know how important it is to
              maintain your boat in top condition. We can provide the quality
              maintenance and repairs you need to keep your boat running at its
              best.
            </SupportSectionCopy>

            <SupportSectionCopy>
              If you’re looking for a team of experts to help you maintain the
              high-performance level of your Cigarette Racing boat, you’ve come
              to the right place. Our team of factory-trained experts will
              service your Cigarette Racing boat from bow to stern. We are not
              just a Mercury Authorized Dealer but also staff a team of
              Certified Technicians. As a Mercury Certified and Authorized
              Dealer, we service any brand of boat with Mercury power.
            </SupportSectionCopy>

            <SupportSectionCopy>
              Our facility stocks Mercury, MerCruiser, Mercury Racing and
              Cigarette parts inventory, including those hard to find parts for
              the OLDER Model Cigarettes for all your Mercury Parts and
              Maintenance products needs. Whatever your needs may be, Whether
              Cigarette Racing or Mercury Marine, or any parts used on the
              Cigarette Racing boats, we can take care of them quickly and
              efficiently. Contact us today to learn more.
            </SupportSectionCopy>
          </div>
          <div
            className={clsx(
              `md:w-1/2 flex flex-col justify-center items-center order-1 mb-12 mt-5 md:mb-auto md:order-none`
            )}
          >
            <img
              className="mb-5"
              src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/cigarette-racing-support.jpg?q=30&w=2000"
            />
            <SupportSectionCta>
              Contact Cigarette Racing Support
            </SupportSectionCta>
          </div>
        </div>
      </section>
      {/* Cigarette Racing Maintenance & Repairs */}
      <section className="bg-offWhite px-10 pt-12 md:px-0 relative min-h-screen flex justify-center items-end overflow-hidden">
        <div
          className="flex flex-col md:flex-row max-w-7xl mx-auto"
          data-block-type="HorizontalImageTextBlockComponent"
        >
          <div className="md:w-3/4 lg:w-2/3">
            <div data-block-type="TextBlockComponent">
              <SupportSectionHeading>
                Cigarette Racing Maintenance & Repairs
              </SupportSectionHeading>
              <SupportSectionCopy>
                Our team of experts provides you with the best service and
                support to keep your boat performing at its peak level. We use
                only Mercury-certified engine technicians, as well as Mercury
                OEM parts, so you can be sure your vessel is in good hands.
              </SupportSectionCopy>
              <SupportSectionCopy>
                The following are the services we offer for Cigarette Racing
                boats:
              </SupportSectionCopy>

              <div className="font-body mb-6">
                <ul>
                  <ListItem>Engine maintenance and repairs</ListItem>
                  <ListItem>Electrical system maintenance and repairs</ListItem>
                  <ListItem>
                    Steering and control system maintenance and repairs
                  </ListItem>
                  <ListItem>
                    Hull, deck, and superstructure maintenance and repairs
                  </ListItem>
                  <ListItem>Plumbing system maintenance and repairs</ListItem>
                  <ListItem>
                    Canvas, upholstery, cushions, and accessories installation
                    or repair
                  </ListItem>
                  <ListItem>
                    Dockside Service, at your residence, or your Marina
                  </ListItem>
                </ul>
              </div>

              <SupportSectionCopy>
                We also provide guidance for Cigarette Racing warranty claims
                and Mercury warranty including extended warranty. We will help
                you in the event of an accident or storm damage to your vessel
                so that you can get back on the water as soon as possible with a
                correctly repaired boat ensuring your and your family’s safety.
              </SupportSectionCopy>
              <SupportSectionCta>
                Contact Cigarette Racing Support
              </SupportSectionCta>
            </div>
          </div>
          <div
            className={clsx(
              `md:w-1/2 flex flex-col justify-center items-center`
            )}
          >
            <img
              className="mt-5"
              src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/mechanic.png"
            />
          </div>
        </div>
      </section>
      {/* We Provide Factory... */}
      <section
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://cigaretteracingsupport.com/wp-content/uploads/2022/02/bg-1.jpg)',
        }}
        className="p-10"
      >
        <div className="text-white font-body text-center leading-relaxed text-xl">
          We provide Factory Authorized Refit Services for all Cigarette Racing
          boats, from a refresh to give it a new look, to complete refits
          including power, paint, and interior.
        </div>
      </section>
      {/* Mercury Certified Engine Maintenance & Repairs */}
      <section className="max-w-5xl px-10 pb-12 pt-12 md:px-0 relative min-h-screen justify-center md:flex-col md:max-w-6xl text-center mx-auto items-end overflow-hidden">
        <div>
          <SupportSectionHeading>
            Mercury Certified Engine Maintenance & Repairs
          </SupportSectionHeading>
          <SupportSectionCopy>
            Mercury OEM parts and Mercury Certified Technicians are critical
            parts of keeping your boat in safe and reliable operating condition.
            Our Mercury factory-trained technicians have years of experience
            repairing and maintaining Mercury engines, so you can be sure your
            engine is in good hands. We will service any boat brand with Mercury
            Marine power plants.
          </SupportSectionCopy>
          <SupportSectionCopy>
            We have been servicing Mercury powerplants for over 25 years,
            emphasizing high-performance engines such as Mercury Racing
            Inboards, Verado outboards, and Mercury Racing outboards. Our team
            of experts take special care to ensure that your engine performs at
            its best. We use only Mercury OEM parts and accessories in our
            service center.
          </SupportSectionCopy>
        </div>
        <div className="md:flex">
          <img
            className="md:flex my-4 md:max-w-full md:w-1/2 md:pr-3"
            src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/outboard.png"
            alt=""
          />
          <img
            className="md:flex my-4 md:max-w-full md:w-1/2 md:pl-3"
            src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/onboard.png"
            alt=""
          />
        </div>
        <SupportSectionCta className="self-center">
          Contact Cigarette Racing Support
        </SupportSectionCta>
      </section>
      {/* Maintenance & repair experts */}
      <section
        style={{
          backgroundImage:
            'url(https://cigaretteracingsupport.com/wp-content/uploads/2022/02/bg3.jpg)',
        }}
        className="px-4 py-20 md:px-0 relative md:flex justify-center text-center items-end overflow-hidden text-white"
      >
        <img
          className="mb-4"
          src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/mercury-logo.png"
          alt=""
        />
        <div className="mb-4 font-body text-3xl leading-none">
          Maintenance & repair experts
        </div>
        <div className="mb-8 font-body text-xl">
          We Cover All Your Boat and Engine Repair Needs
        </div>
        <SupportSectionCta>Contact Cigarette Racing Support</SupportSectionCta>
      </section>
      <section className="px-10 pt-12 md:px-0 relative min-h-screen flex-col md:flex justify-center items-end overflow-hidden">
        <img
          src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/dealer.png"
          alt=""
        />
        <div>
          <SupportSectionHeading className="mb-4 font-body text-2xl">
            Mercury Parts
          </SupportSectionHeading>
          <SupportSectionCopy>
            Cigarette Racing is a Mercury Authorized Dealer. We have a wide
            variety of Mercury parts in stock at our state-of-the-art service
            center located in Opa-Locka, FL. We also have parts counter so you
            can pick up any repair or maintenance part just like you would at
            your local auto parts store.
          </SupportSectionCopy>
        </div>
        <div className="flex-column md:flex pb-8">
          <div className="flex flex-col">
            <div className="mb-4 mt-6 font-body text-xl leading-none">
              Mercury OEM Parts & Accessories:
            </div>
            <ul className="list-disc pl-5 mb-4 self-start">
              <li>Mercury props</li>
              <li>Mercury outdrives</li>
              <li>Mercury engine parts</li>
              <li>Mercury maintenance parts</li>
              <li>Mercury oils</li>
              <li>Steering parts</li>
              <li>Controls</li>
              <li>Electrical parts</li>
              <li>Mercury outboard motors</li>
              <li>Mercury inboard motors</li>
            </ul>
            <SupportSectionCopy className="mb-4">
              We carry everything from propellers to electrical systems, so we
              have you covered for whatever repairs or replacements you need.
              Our Mercury OEM Parts Department is helpful in servicing any type
              of boat brand with Mercury marine power plants.
            </SupportSectionCopy>
            <SupportSectionCta className="self-center">
              Contact Cigarette Racing Support
            </SupportSectionCta>
          </div>
          <div className="my-8 mx-10">
            <img
              src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/part8.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="px-4 py-40 md:px-0 relative md:flex justify-center items-end overflow-hidden text-white text-center">
        <div className="absolute top-0 left-0 h-screen w-full">
          <TopVideo
            image=""
            videoUrl="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/mercury.mp4"
          />
        </div>
        <div
          className="absolute top-0 left-0 h-screen w-full pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 51.47%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />
        {/* video bg https://cigaretteracingsupport.com/wp-content/uploads/2022/02/mercury.mp4 */}
        <div className="relative z-10">
          <img
            src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/Mercury_Parts-Accessories_1C_White.png"
            alt=""
          />
          <div className="mb-2 mt-6 font-body text-3xl leading-none">
            Authorized
            <br />
            Supplier
          </div>
          <div className="font-body text-xl mb-6">
            Genuine Mercury Marine Parts
          </div>
          <SupportSectionCta>
            Contact Cigarette Racing Support
          </SupportSectionCta>
        </div>
      </section>
      <section className="px-10 pt-12 pb-12 bg-offWhite text-center md:px-0 relative min-h-screen md:flex justify-center items-end overflow-hidden">
        <img
          src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/poker-support.png"
          alt=""
        />
        <div className="mb-4 font-body text-3xl leading-tight mt-4">
          POKER RUN SUPPORT
        </div>
        <SupportSectionCopy>
          We Provide Poker Run Support, from preparing the boat for the Poker
          Run and launching or delivering it to the Start Location, picking it
          back up and Flushing and Detailing, to Support during the Run!
        </SupportSectionCopy>
        <div className="md:flex">
          <img
            className="md:w-1/3 mb-4"
            src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/poker-run-support.png"
            alt=""
          />
          <img
            className="md:w-1/3 mb-4"
            src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/poker-race-support.png"
            alt=""
          />
          <img
            className="md:w-1/3 mb-4"
            src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/poker-race-support3.png"
            alt=""
          />
        </div>
        <SupportSectionCta>Contact Cigarette Racing Support</SupportSectionCta>
      </section>
      <section className="px-10 pt-12 pb-12 md:px-0 relative md:flex justify-center items-end overflow-hidden">
        <SupportSectionHeading>About Us</SupportSectionHeading>
        <SupportSectionCopy>
          If you’re looking for a reliable and experienced team to support your
          high-performance Cigarette Racing boat, look no further than our team
          here at Cigarette Racing Support. Give us a call today to learn more
          about how we can support your Cigarette Racing boat.
        </SupportSectionCopy>
        <div className="md:flex">
          <div>
            <SupportSectionHeading>Contact Details</SupportSectionHeading>
            <div>
              <ul>
                <li className="mb-4">
                  <div className="flex">
                    <div className="flex-shrink p-2 mr-4">
                      <img
                        height="32px"
                        width="32px"
                        src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/map.png"
                        alt="map"
                      />
                    </div>
                    <div>
                      <span className="block font-bold text-lg mb-1">
                        Address
                      </span>
                      <span className="font-normal font-body">
                        4355 NW 128th St, Opa-locka
                        <br />
                        FL 33054, United States
                      </span>
                    </div>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex">
                    <div className="flex-shrink p-2 mr-4">
                      <img
                        height="32px"
                        width="32px"
                        src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/phone.png"
                        alt="map"
                      />
                    </div>
                    <div>
                      <span className="block font-bold text-lg mb-1">
                        Phone Number
                      </span>
                      <span className="font-normal font-body">
                        786-761-7615
                      </span>
                    </div>
                  </div>
                </li>
                <li className="mb-4">
                  <div className="flex">
                    <div className="flex-shrink p-2 mr-4">
                      <img
                        height="32px"
                        width="32px"
                        src="https://cigaretteracingsupport.com/wp-content/uploads/2022/02/email.png"
                        alt="map"
                      />
                    </div>
                    <div>
                      <span className="block font-bold text-lg mb-1">
                        Email
                      </span>
                      <span className="font-normal font-body">
                        mindi@cigaretteracing.com
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <HiddenSupportForm />
    </Layout>
  )
}

export default SupportPage
