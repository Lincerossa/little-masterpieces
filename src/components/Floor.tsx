/* eslint-disable react/no-unknown-property */
import { useLoader, Vector3 } from '@react-three/fiber'
import { FC } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

type FloorProps = {
  position: Vector3
}

const Floor: FC<FloorProps> = ({ position }) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      'Marble016_1K_Color.jpg',
      'Marble016_1K_Displacement.jpg',
      'Marble016_1K_NormalDX.jpg',
      'Marble016_1K_NormalGL.jpg',
      'Marble016_1K_Roughness.jpg',
    ],
  )

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  )
}

export default Floor
