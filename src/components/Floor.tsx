/* eslint-disable react/no-unknown-property */
import { MeshReflectorMaterial } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { FC } from 'react'

type FloorProps = {
  position: Vector3
}

const Floor: FC<FloorProps> = ({ position }) => {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={50}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
        mirror={1}
      />
    </mesh>
  )
}

export default Floor
