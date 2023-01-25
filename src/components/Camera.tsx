import { useFrame } from '@react-three/fiber'
import { FC } from 'react'
import { MathUtils } from 'three'

import { MeshGeometryBaseProps } from '../utils/types'

type CameraProps = {
  cameraPosition: MeshGeometryBaseProps['position']
  setCameraPosition: (e: null) => void
}

const SPEED = 0.05
const DISTANCE = 4
const DEVIATION = 0.2

const Camera: FC<CameraProps> = ({ setCameraPosition, cameraPosition }) => {
  const [X, Y, Z] = cameraPosition

  useFrame(({ camera }) => {
    const { x, y, z } = camera.position

    camera.position.x = MathUtils.lerp(x, X, SPEED)
    camera.position.y = MathUtils.lerp(y, Y, SPEED)
    camera.position.z = MathUtils.lerp(z, Z + DISTANCE, SPEED)
    camera.lookAt(X, Y, Z)

    if (
      Math.abs(x - X) < DEVIATION &&
      Math.abs(y - Y) < DEVIATION &&
      Math.abs(z - Z) < DEVIATION + DISTANCE
    ) {
      setCameraPosition(null)
    }
  })
  return null
}

export default Camera
