/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber'
import { FC } from 'react'
import * as THREE from 'three'

type RoomProps = {
  position: [number, number, number]
  dimension: [number, number, number]
  image: string
}
const Room: FC<RoomProps> = ({ position, dimension, image }) => {
  const texture = useLoader(THREE.TextureLoader, image)

  const frameWidth = 0.1
  const frameThickness = 0.05

  return (
    <>
      <mesh position={position}>
        <boxGeometry args={[dimension[0], dimension[1], dimension[2]]} />
        <meshPhysicalMaterial attach="material" color="#ea580c" />
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
