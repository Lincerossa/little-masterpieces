/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useCallback, useMemo, useState } from 'react'

import Floor from '../components/Floor'
import Room from '../components/Room/Room'
import { RoomProps } from '../components/Room/types'
import { CEILING_HEIGHT, GROUND_FLOOR, IMAGES } from '../utils/consts'

const Museum = () => {
  const [manualCamera, setManualCamera] = useState(true)

  const images = useMemo<Array<RoomProps>>(() => {
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

  const handleToggleCamera = useCallback(() => {
    setManualCamera((e) => !e)
  }, [setManualCamera])

  return (
    <div className="w-screen h-screen bg-indigo-900">
      <button
        className="z-10 absolute bottom-1 left-1 rounded-md p-2 bg-orange-600 shadow-md hover:shadow-lg transition-shadow uppercase text-white"
        onClick={handleToggleCamera}
      >
        Manual camera {manualCamera ? 'on' : 'off'}
      </button>
      <Canvas>
        {manualCamera && <OrbitControls />}
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
          <Room key={image} position={position} dimension={dimension} image={image} />
        ))}
      </Canvas>
    </div>
  )
}
export default Museum
