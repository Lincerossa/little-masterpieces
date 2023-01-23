/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Floor from '../components/Floor'
import Room from '../components/Room'
import { CEILING_HEIGHT, GROUND_FLOOR } from '../utils/consts'

const Museum = () => (
  <div className="w-screen h-screen bg-indigo-900">
    <Canvas>
      <OrbitControls />
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
      <pointLight position={[0, CEILING_HEIGHT, -10]} color="#312e81" intensity={10} />
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
