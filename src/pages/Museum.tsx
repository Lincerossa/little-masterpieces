/* eslint-disable react/no-unknown-property */
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'

import Camera from '../components/Camera'
import Floor from '../components/Floor'
import Lights from '../components/Lights'
import Painting from '../components/Painting'
import { GROUND_FLOOR } from '../utils/consts'
import useImages from '../utils/hooks/useImages'
import { MeshGeometryBaseProps } from '../utils/types'

const Museum = () => {
  const [position, setPosition] = useState<MeshGeometryBaseProps['position']>([0,0,0])
  const images = useImages()

  return (
    <div className="w-screen h-screen bg-indigo-900">
      <Canvas camera={{ fov: 75, position: [0, 1, 8] }}>
        <Camera position={position} />
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
              setPosition(position)
            }}
          >
            <Painting position={position} dimension={dimension} image={image} />
          </group>
        ))}
      </Canvas>
    </div>
  )
}
export default Museum
