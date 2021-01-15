function createImageCacher() {
  const cache: Record<string, boolean> = {}
  const createImage = (url: string): void => {
    if (cache[url]) return

    console.log(url)

    const img = new Image()
    img.src = url

    cache[url] = true
  }

  return (urls: string[]) => {
    urls.forEach(createImage)
  }
}

export const cacheImages = createImageCacher()
