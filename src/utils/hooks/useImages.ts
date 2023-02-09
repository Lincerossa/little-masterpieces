import { useMemo } from 'react'

import { IMAGES } from '../consts'
import { MeshGeometryBaseProps } from '../types'

type UseImages = () => Array<MeshGeometryBaseProps & { image: string }>

const useImages: UseImages = () => {
  const images = useMemo<Array<MeshGeometryBaseProps & { image: string }>>(() => {
    return IMAGES.map((image, index) => ({
      position: [index * 2.25 - (2 * IMAGES.length) / 2, 1.75, 0],
      dimension: [2, 2, 0.2],
      image,
    }))
  }, [])

  return images
}

export default useImages
