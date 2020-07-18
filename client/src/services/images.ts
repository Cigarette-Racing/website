function createImageCacher() {
  const cache: Record<string, boolean> = {}

  return (urls: string[]) => {
    urls.forEach((url) => {
      if (cache[url]) return

      const img = new Image()
      img.src = url

      cache[url] = true
    })
  }
}

export const cacheImages = createImageCacher()
