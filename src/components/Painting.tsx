/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber'
import { FC, useMemo } from 'react'
import * as THREE from 'three'

import { MeshGeometryBaseProps } from '../utils/types'

type PaintingProps = MeshGeometryBaseProps & { image: string }

const Painting: FC<PaintingProps> = ({ position, dimension, image }) => {
  const texture = useLoader(THREE.TextureLoader, image)

  const frame = useMemo<MeshGeometryBaseProps>(() => {
    const FRAME_WIDTH = 0.1
    const FRAME_THICKNESS = 0.05
    return {
      position: [position[0], position[1], (dimension[2] + FRAME_THICKNESS) / 2],
      dimension: [
        dimension[0] - FRAME_WIDTH,
        dimension[1] - FRAME_WIDTH,
        FRAME_THICKNESS,
      ],
    }
  }, [position, dimension])

  return (
    <group>
      <mesh position={position}>
        <boxGeometry args={dimension} />
        <meshPhysicalMaterial attach="material" color="#a10de5" />
      </mesh>
      <mesh position={frame.position}>
        <boxGeometry args={frame.dimension} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  )
}

export default Painting
