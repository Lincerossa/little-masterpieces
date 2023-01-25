/* eslint-disable react/no-unknown-property */
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

import Camera from '../components/Camera'
import Floor from '../components/Floor'
import Room from '../components/Room'
import { GROUND_FLOOR } from '../utils/consts'
import useImages from '../utils/hooks/useImages'
import { MeshGeometryBaseProps } from '../utils/types'

const Museum = () => {
  const [cameraPosition, setCameraPosition] = useState<
    MeshGeometryBaseProps['position'] | null
  >(null)

  const images = useImages()

  return (
    <div className="w-screen h-screen bg-indigo-900">
      <Canvas camera={{ fov: 75, position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          {cameraPosition && (
            <Camera
              setCameraPosition={setCameraPosition}
              cameraPosition={cameraPosition}
            />
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
            <group
              key={image}
              onClick={() => {
                setCameraPosition(position)
              }}
            >
              <Room position={position} dimension={dimension} image={image} />
            </group>
          ))}
        </Suspense>
      </Canvas>
    </div>
  )
}
export default Museum
