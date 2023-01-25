/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useState } from 'react'

import Camera from '../components/Camera'
import Floor from '../components/Floor'
import Lights from '../components/Lights'
import Room from '../components/Room'
import { GROUND_FLOOR } from '../utils/consts'
import useImages from '../utils/hooks/useImages'
import { MeshGeometryBaseProps } from '../utils/types'

const Museum = () => {
  const [cameraPosition, setCameraPosition] = useState<
    MeshGeometryBaseProps['position'] | null
  >(null)
  const [manualCamera, setManualCamera] = useState<boolean>(false)
  const images = useImages()

  const handleSetCameraPosition = useCallback(
    (position: MeshGeometryBaseProps['position'] | null) => {
      setManualCamera(false)
      setCameraPosition(position)
    },
    [],
  )

  return (
    <div className="w-screen h-screen bg-indigo-900">
      <button
        className="z-10 absolute top-1 right-1 rounded-md p-2 bg-orange-600 shadow-md hover:shadow-lg transition-shadow uppercase text-white"
        onClick={() => setManualCamera((e) => !e)}
      >
        Manual camera {manualCamera ? 'on' : 'off'}
      </button>
      <Canvas camera={{ fov: 75, position: [0, 1, 8] }}>
        <Suspense fallback={null}>
          {cameraPosition && (
            <Camera
              setCameraPosition={handleSetCameraPosition}
              cameraPosition={cameraPosition}
            />
          )}
          {manualCamera && <OrbitControls />}
          <Lights />
          <Stars
            radius={100}
            depth={40}
            count={5000}
            factor={10}
            saturation={10}
            fade
            speed={1}
          />
          <Floor position={[0, GROUND_FLOOR, 0]} />
          {images.map(({ image, position, dimension }) => (
            <group
              key={image}
              onClick={() => {
                handleSetCameraPosition(position)
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
