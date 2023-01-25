import { useFrame } from '@react-three/fiber'
import { FC } from 'react'
import { MathUtils } from 'three'

import { MeshGeometryBaseProps } from '../utils/types'

type CameraProps = {
  cameraPosition: MeshGeometryBaseProps['position']
  setCameraPosition: (e: null) => void
}
const Camera: FC<CameraProps> = ({ setCameraPosition, cameraPosition }) => {
  const [x, y, z] = cameraPosition
  useFrame(({ camera }) => {
    camera.position.x = MathUtils.lerp(camera.position.x, x, 0.05)
    camera.position.y = MathUtils.lerp(camera.position.y, y, 0.05)
    camera.position.z = MathUtils.lerp(camera.position.z, z + 2, 0.05)

    if (
      Math.abs(camera.position.x - x) < 0.2 &&
      Math.abs(camera.position.y - y) < 0.2 &&
      Math.abs(camera.position.z - z) < 2.2
    ) {
      setCameraPosition(null)
    }
  })
  return null
}

export default Camera
