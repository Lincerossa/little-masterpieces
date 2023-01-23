/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import Room from '../components/Room'

const Museum = () => (
  <div className="w-screen h-screen bg-indigo-500 flex items-center justify-center">
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Room position={[-1.2, 0, 0]} />
      <Room position={[1.2, 0, 0]} />
    </Canvas>
  </div>
)
export default Museum
