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
    'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHBhaW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  )

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
