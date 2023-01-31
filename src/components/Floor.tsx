/* eslint-disable react/no-unknown-property */
import { Vector3 } from '@react-three/fiber'
import { FC } from 'react'

type FloorProps = {
  position: Vector3
}

const Floor: FC<FloorProps> = ({ position }) => {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[500, 500]} />
      <meshBasicMaterial attach="material" color="#84319B" />
    </mesh>
  )
}

export default Floor
