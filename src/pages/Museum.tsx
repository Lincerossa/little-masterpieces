/* eslint-disable react/no-unknown-property */
import { Stars } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { FC, useMemo, useState } from 'react'
import { MathUtils } from 'three'

import Floor from '../components/Floor'
import Room from '../components/Room'
import { CEILING_HEIGHT, GROUND_FLOOR, IMAGES } from '../utils/consts'
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

const Museum = () => {
  const [cameraPosition, setCameraPosition] = useState<
    MeshGeometryBaseProps['position'] | null
  >(null)

  const images = useMemo<Array<MeshGeometryBaseProps & { image: string }>>(() => {
    return IMAGES.map((image, index) => ({
      position: [
        index * 3 - (2 * IMAGES.length) / 2,
        GROUND_FLOOR + CEILING_HEIGHT / 2,
        0,
      ],
      dimension: [2, CEILING_HEIGHT, 0.2],
      image,
    }))
  }, [])

  return (
    <div className="w-screen h-screen bg-indigo-900">
      <Canvas camera={{ fov: 75, position: [0, 0, 4] }}>
        {cameraPosition && (
          <Camera setCameraPosition={setCameraPosition} cameraPosition={cameraPosition} />
        )}
        <ambientLight intensity={2} />
        <Stars
          radius={100}
          depth={40}
          count={5000}
          factor={10}
          saturation={10}
          fade
          speed={1}
        />
        <pointLight position={[0, 50, -10]} color="#312e81" intensity={10} />
        <Floor position={[0, GROUND_FLOOR, 0]} />
        {images.map(({ image, position, dimension }) => (
          <group key={image} onClick={() => setCameraPosition(position)}>
            <Room position={position} dimension={dimension} image={image} />
          </group>
        ))}
      </Canvas>
    </div>
  )
}
export default Museum
