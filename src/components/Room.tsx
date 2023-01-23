/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber'
import { FC } from 'react'
import * as THREE from 'three'

type RoomProps = {
  position: [number, number, number]
  dimension: [number, number, number]
}
const Room: FC<RoomProps> = ({ position, dimension }) => {
  const texture = useLoader(
    THREE.TextureLoader,
    'https://images.unsplash.com/photo-1620136619922-f592abb9df44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
  )

  const frameWidth = 0.1
  const frameThickness = 0.05

  return (
    <>
      <mesh position={position}>
        <boxGeometry args={[dimension[0], dimension[1], dimension[2]]} />
        <meshPhysicalMaterial attach="material" color="red" />
      </mesh>
      <mesh position={[position[0], position[1], (dimension[2] + frameThickness) / 2]}>
        <boxGeometry
          args={[dimension[0] - frameWidth, dimension[1] - 0.1, frameThickness]}
        />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </>
  )
}

export default Room
