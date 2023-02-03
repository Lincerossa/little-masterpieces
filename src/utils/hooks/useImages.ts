import { useMemo } from 'react'

import { CEILING_HEIGHT, IMAGES } from '../consts'
import { MeshGeometryBaseProps } from '../types'

type UseImages = () => Array<MeshGeometryBaseProps & { image: string }>

const useImages: UseImages = () => {
  const images = useMemo<Array<MeshGeometryBaseProps & { image: string }>>(() => {
    return IMAGES.map((image, index) => ({
      position: [index * 2.25 - (2 * IMAGES.length) / 2, 0, 0],
      dimension: [2, CEILING_HEIGHT, 0.2],
      image,
    }))
  }, [])

  return images
}

export default useImages
