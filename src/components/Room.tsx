/* eslint-disable react/no-unknown-property */
import { Vector3 } from '@react-three/fiber'
import { FC } from 'react'

type RoomProps = {
  position: Vector3
  dimension: [number, number, number]
}
const Room: FC<RoomProps> = ({ position, dimension }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={dimension} />
      <meshPhysicalMaterial attach="material" color="red" />
    </mesh>
  )
}

export default Room
