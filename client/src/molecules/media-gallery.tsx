import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { GallerySection, GalleryMedia } from '../types/boat'
import {
  BoatSection,
  MobileSectionHeader,
  CarouselButtons,
} from '../templates/boat.components'
import { InPageAnchor } from './in-page-nav'
import { VerticalHeader } from '../atoms/vertical-header'
import { Typography } from '../atoms/typography'
import { ProgressBar } from '../atoms/progress-bar'
import { useMedia, useLockBodyScroll } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'
import { cacheImages } from '../services/images'
import { AspectRatio } from '../atoms/aspect-ratio'
import { CircleButton } from '../atoms/circle-button'
import { PlayIcon, ExpandIcon } from '../svgs/icons'
import ReactModal from 'react-modal'
import ReactPlayer from 'react-player'

const parentAnimations = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  variants: {
    hidden: {
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05,
      },
    },
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  },
}

const childAnimations = {
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  transition: {
    duration: 0.3,
  },
}

export interface MediaGalleryProps extends GallerySection {}

export const MediaGallery = ({ title, gallery }: MediaGalleryProps) => {
  const showMore = useMedia('(min-width: 720px)')
  const [lightboxMedia, setLightboxMedia] = useState<GalleryMedia>()
  const [page, setPage] = useState(1) // One-based to keep ourselves sane
  const [category, setCategory] = useState<'all' | 'photos' | 'videos'>('all')
  useLockBodyScroll(!!lightboxMedia)

  const perPage = showMore ? 8 : 4
  const totalPages = Math.ceil(gallery.length / perPage)

  const goNext = () => {
    setPage((page) => (page === totalPages ? page : page + 1))
  }
  const goPrev = () => {
    setPage((page) => (page === 1 ? page : page - 1))
  }
  const goNextLightbox = () => {
    const lightboxMediaIndex = gallery.findIndex(
      (item) => item === lightboxMedia
    )
    if (lightboxMediaIndex < 0) return
    const nextIndex = Math.min(lightboxMediaIndex + 1, gallery.length - 1)
    setLightboxMedia(gallery[nextIndex])
  }
  const goPrevLightbox = () => {
    const lightboxMediaIndex = gallery.findIndex(
      (item) => item === lightboxMedia
    )
    if (lightboxMediaIndex < 0) return
    const prevIndex = Math.max(lightboxMediaIndex - 1, 0)
    setLightboxMedia(gallery[prevIndex])
  }

  useEffect(() => {
    cacheImages(
      getGallerySlice(gallery, page + 1, perPage).map(
        (item) => item.image.childImageSharp?.fluid?.src!
      )
    )
  }, [page, perPage])

  return (
    <BoatSection theme="dark" className="sm:py-32">
      <InPageAnchor title={title} />
      <MobileSectionHeader className="sm:hidden">{title}</MobileSectionHeader>
      <div className="relative max-w-7xl mx-auto sm:pl-16">
        <VerticalHeader
          theme="dark"
          className="absolute -ml-12 xl:-ml-16 mt-12"
        >
          {title}
        </VerticalHeader>
        <div className="px-4 flex space-x-6 mb-6">
          <CategorySelector
            onClick={() => setCategory('all')}
            selected={category === 'all'}
          >
            All
          </CategorySelector>
          <CategorySelector
            onClick={() => setCategory('photos')}
            selected={category === 'photos'}
            disabled={!hasPhotos(gallery)}
          >
            Photos
          </CategorySelector>
          <CategorySelector
            onClick={() => setCategory('videos')}
            selected={category === 'videos'}
            disabled={!hasVideos(gallery)}
          >
            Videos
          </CategorySelector>
        </div>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={`${page}-${perPage}`}
            {...parentAnimations}
            className="grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col-dense sm:grid-rows-2 gap-6 px-4 mb-16"
          >
            {getGallerySlice(gallery, page, perPage).map((item, index) => (
              <motion.div
                key={`${page}-${perPage}-${item.thumbnail.childImageSharp?.fluid
                  ?.src!}`}
                {...childAnimations}
              >
                <GalleryImage
                  key={index}
                  img={item.thumbnail.childImageSharp?.fluid?.src!}
                  hasVideo={!!item.videoUrl}
                  onClick={() => setLightboxMedia(item)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex sm:justify-between items-center px-4">
          <div className="hidden sm:block w-full max-w-xs md:max-w-sm lg:max-w-md">
            <ProgressBar percentage={calculatePercentage(page, totalPages)} />
          </div>
          <CarouselButtons
            className="mb-4"
            onClickNext={goNext}
            onClickPrev={goPrev}
            disabledNext={page === totalPages}
            disabledPrev={page === 1}
          />
        </div>
      </div>
      <Lightbox
        isOpen={!!lightboxMedia}
        onClose={() => setLightboxMedia(undefined)}
        media={lightboxMedia}
        goNext={goNextLightbox}
        goPrev={goPrevLightbox}
        disabledNext={gallery.indexOf(lightboxMedia!) === gallery.length - 1}
        disabledPrev={gallery.indexOf(lightboxMedia!) === 0}
      />
    </BoatSection>
  )
}

const modalStyles = {
  overlay: {
    background: 'transparent',
    zIndex: 50,
  },
  content: {
    background: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    border: 'none',
    borderRadius: 0,
    overflow: 'hidden',
  },
}

const Lightbox = ({
  disabledNext,
  disabledPrev,
  goNext,
  goPrev,
  isOpen,
  media,
  onClose,
}: {
  disabledNext: boolean
  disabledPrev: boolean
  goNext: () => void
  goPrev: () => void
  isOpen: boolean
  media?: GalleryMedia
  onClose: () => void
}) => {
  const animationDuration = 0.3
  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyles}
      closeTimeoutMS={animationDuration * 1000}
      onRequestClose={onClose}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration }}
            className="relative min-h-full bg-black bg-opacity-75 flex justify-center items-center"
            onClick={onClose}
          >
            <div
              className="w-5/6 flex justify-center items-center"
              style={{ width: '90vw', height: '90vh' }}
            >
              {media!.videoUrl ? (
                <ReactPlayer
                  className=""
                  url={media!.videoUrl}
                  controls
                  playing
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
              ) : (
                <motion.img
                  src={media!.image.childImageSharp?.fluid?.src!}
                  className="max-h-full max-w-full"
                />
              )}
            </div>
            <CarouselButtons
              className="absolute px-4 w-full justify-between"
              onClickNext={(e) => {
                e.stopPropagation()
                goNext()
              }}
              onClickPrev={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              disabledNext={disabledNext}
              disabledPrev={disabledPrev}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  )
}

const GalleryImage = ({
  className = '',
  hasVideo,
  img,
  onClick,
}: {
  className?: string
  hasVideo: boolean
  img: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}) => {
  return (
    <div className={`max-w-xs ${className}`} role="button" onClick={onClick}>
      <AspectRatio ratio="1:1" className="relative group">
        <img
          src={img}
          className="absolute h-full w-full object-cover sm:filter-grayscale group-hover:filter-none transition duration-150 ease-in-out"
        />
        <div className="absolute inset-0 bg-black transform bg-opacity-25 group-hover:bg-opacity-0 transition duration-150 ease-in-out"></div>
        <motion.div
          {...childAnimations}
          className="absolute right-0 bottom-0 mb-4 mr-4"
        >
          <CircleButton
            icon={hasVideo ? PlayIcon : ExpandIcon}
            size="sm"
            className="group-hover:bg-white group-hover:text-red"
          />
        </motion.div>
      </AspectRatio>
    </div>
  )
}

function CategorySelector({
  children,
  disabled,
  selected,
  ...rest
}: { selected: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} disabled={disabled} type="button" className="text-white">
      <Typography
        variant="e2"
        className={clsx({
          'text-red': selected,
          'text-gray-3 cursor-default': disabled,
        })}
      >
        {children}
      </Typography>
    </button>
  )
}

const getGallerySlice = (
  gallery: GalleryMedia[],
  page: number,
  perPage: number
) => {
  const start = (page - 1) * perPage
  const end = start + perPage
  return gallery.slice(start, end)
}
const calculatePercentage = (page: number, totalPages: number) =>
  Math.round((page / totalPages) * 100)
const hasVideos = (gallery: GalleryMedia[]) =>
  gallery.some((media) => !!media.embedUrl || !!media.videoUrl)
const hasPhotos = (gallery: GalleryMedia[]) =>
  gallery.some((media) => !media.embedUrl && !media.videoUrl)
