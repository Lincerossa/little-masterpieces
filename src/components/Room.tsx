/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber'
import { FC, useMemo } from 'react'
import * as THREE from 'three'

import { MeshGeometryBaseProps } from '../utils/types'

type RoomProps = MeshGeometryBaseProps & { image: string }

const Room: FC<RoomProps> = ({ position, dimension, image }) => {
  const texture = useLoader(THREE.TextureLoader, image)

  const frame = useMemo<MeshGeometryBaseProps>(() => {
    const FRAME_WIDTH = 0.1
    const FRAMTE_THICKNESS = 0.05
    return {
      position: [position[0], position[1], (dimension[2] + FRAMTE_THICKNESS) / 2],
      dimension: [dimension[0] - FRAME_WIDTH, dimension[1] - 0.1, FRAMTE_THICKNESS],
    }
  }, [position, dimension])

  return (
    <group>
      <mesh position={position}>
        <boxGeometry args={dimension} />
        <meshPhysicalMaterial attach="material" color="#ea580c" />
      </mesh>
      <mesh position={frame.position}>
        <boxGeometry args={frame.dimension} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  )
}

export default Room
