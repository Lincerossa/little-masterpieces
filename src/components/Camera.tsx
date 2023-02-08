import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { FC } from 'react'
import { MathUtils } from 'three'

import { MeshGeometryBaseProps } from '../utils/types'

type CameraProps = {
  position: MeshGeometryBaseProps['position']
}

const SPEED = 0.05
const DISTANCE = 4
const DEVIATION = 0.2

const Camera: FC<CameraProps> = ({ position }) => {
  const { fly } = useControls({
    fly: false,
  })
  const [X, Y, Z] = position

  useFrame(({ camera }) => {
    const { x, y, z } = camera.position
    if (!fly) return
    camera.position.x = MathUtils.lerp(x, X, SPEED)
    camera.position.y = MathUtils.lerp(y, Y, SPEED)
    camera.position.z = MathUtils.lerp(z, Z + DISTANCE, SPEED)
    camera.lookAt(X, Y, Z)

    if (
      Math.abs(x - X) < DEVIATION &&
      Math.abs(y - Y) < DEVIATION &&
      Math.abs(z - Z) < DEVIATION + DISTANCE
    ) {
      // TODO: end of the fly
    }
  })
  return <OrbitControls />
}

export default Camera
