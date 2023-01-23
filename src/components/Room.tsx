/* eslint-disable react/no-unknown-property */
import { Vector3 } from '@react-three/fiber'
import React, { FC, useState } from 'react'

type RoomProps = {
  position: Vector3
}
const Room: FC<RoomProps> = ({ position }) => {
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <mesh
      position={position}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Room
