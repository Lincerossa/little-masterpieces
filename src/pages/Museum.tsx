/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Floor from '../components/Floor'
import Room from '../components/Room'
import { CEILING_HEIGHT, GROUND_FLOOR } from '../utils/consts'

const Museum = () => (
  <div className="w-screen h-screen bg-indigo-500">
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={2} />
      <pointLight position={[10, CEILING_HEIGHT + 5, 1]} color="#ea580c" intensity={1} />
      <Floor position={[0, GROUND_FLOOR, 0]} />
      <Room
        position={[0, GROUND_FLOOR + CEILING_HEIGHT / 2, 0]}
        dimension={[2, CEILING_HEIGHT, 0.2]}
      />
      <Room
        position={[-3, GROUND_FLOOR + CEILING_HEIGHT / 2, 0]}
        dimension={[2, CEILING_HEIGHT, 0.2]}
      />
      <Room
        position={[3, GROUND_FLOOR + CEILING_HEIGHT / 2, 0]}
        dimension={[2, CEILING_HEIGHT, 0.2]}
      />
    </Canvas>
  </div>
)
export default Museum
