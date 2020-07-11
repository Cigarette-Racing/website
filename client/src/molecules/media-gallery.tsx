import React, { useState } from 'react'
import clsx from 'clsx'
import { GallerySection, Media } from '../types/boat'
import {
  BoatSection,
  MobileSectionHeader,
  GalleryImage,
  CarouselButtons,
} from '../boat.components'
import { InPageAnchor } from './in-page-nav'
import { VerticalHeader } from '../atoms/vertical-header'
import { Typography } from '../atoms/typography'
import { ProgressBar } from '../atoms/progress-bar'
import { useMedia } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'

const animations = {
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
    opacity: { duration: 0.6 },
  },
}

export interface MediaGalleryProps extends GallerySection {}

export const MediaGallery = ({ title, gallery }: MediaGalleryProps) => {
  const showMore = useMedia('(min-width: 640px)')
  const [page, setPage] = useState(1) // One-based to keep ourselves sane
  const [category, setCategory] = useState<'all' | 'photos' | 'videos'>('all')
  const perPage = showMore ? 8 : 4
  const totalPages = Math.ceil(gallery.length / perPage)
  const goNext = () => {
    setPage((page) => (page === totalPages ? page : page + 1))
  }
  const goPrev = () => {
    setPage((page) => (page === 1 ? page : page - 1))
  }
  console.log(
    'slice',
    getGallerySlice(gallery, page, perPage),
    getGallerySlice(gallery, page, perPage).length
  )
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
        <div className="grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col-dense sm:grid-rows-2 gap-6 px-4 mb-16">
          <AnimatePresence>
            {getGallerySlice(gallery, page, perPage).map((item, index) => (
              <motion.div key={`${page}-${perPage}-${index}`} {...animations}>
                <GalleryImage
                  key={index}
                  img={item.image.childImageSharp?.fluid?.src!}
                  className={index > 3 ? 'hidden sm:block' : ''}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex sm:justify-between items-center px-4">
          <div className="hidden sm:block w-full max-w-xs md:max-w-sm lg:max-w-md">
            <ProgressBar percentage={calculatePercentage(page, totalPages)} />
          </div>
          <CarouselButtons
            className="mb-4"
            onClickNext={goNext}
            onClickPrev={goPrev}
          />
        </div>
      </div>
    </BoatSection>
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
          'text-gray-3': disabled,
        })}
      >
        {children}
      </Typography>
    </button>
  )
}

const getGallerySlice = (gallery: Media[], page: number, perPage: number) => {
  const start = page - 1
  const end = start + perPage
  return gallery.slice(start, end)
}
const calculatePercentage = (page: number, totalPages: number) =>
  Math.round((page / totalPages) * 100)
const hasVideos = (gallery: Media[]) =>
  gallery.some((media) => !!media.embedUrl || !!media.videoUrl)
const hasPhotos = (gallery: Media[]) =>
  gallery.some((media) => !media.embedUrl && !media.videoUrl)
