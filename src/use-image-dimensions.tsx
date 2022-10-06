import {useEffect, useState} from 'react'
import {UseImageDimensionsOptions} from './types'

export const useImageDimensions = (
  imageUrl: string,
  options?: UseImageDimensionsOptions
) => {
  const defaultInitialDimensions = {width: 0, height: 0}
  const [dimensions, setDimensions] = useState(
    options?.initialDimensions ?? defaultInitialDimensions
  )

  useEffect(() => {
    const img = new Image()
    const zoomMultiplier = getZoomMultiplier(imageUrl)

    img.src = imageUrl
    img.onload = () => {
      const {width, height} = img

      setDimensions({
        width: width / zoomMultiplier,
        height: height / zoomMultiplier,
      })
    }
  }, [imageUrl])

  return dimensions
}

/**
 * Attempt to get the zoom multiplier from the image url.
 *
 * @example
 * someImage@2x.jpg => 2
 * someImage@0x.jpg => 1
 * someImage@Sx.jpg => NaN => 1
 * someImage.jpg => 0 => 1
 */
const getZoomMultiplier = (imageUrl: string) => {
  const start = imageUrl.indexOf('@') + 1
  const end = imageUrl.lastIndexOf('x')
  const multiplier = Number(imageUrl.slice(start, end))

  return isNaN(multiplier) || multiplier === 0 ? 1 : multiplier
}
