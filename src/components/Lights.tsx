/* eslint-disable react/no-unknown-property */
import { useControls } from 'leva'
import { memo, useMemo } from 'react'

import random from '../utils/helpers/random'
const Lights = () => {
  const { lightsColor, mainLightColor, lightsQuantity } = useControls({
    lightsColor: '#a10de5',
    mainLightColor: '#000000',
    lightsQuantity: { value: 20, min: 5, max: 20 },
  })

  const lights = useMemo(
    () =>
      Array.from({ length: lightsQuantity }).map((e, i) => ({
        x: random(-100, 100),
        y: random(-10, 30),
        z: random(-50, -50),
      })),
    [lightsQuantity],
  )
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[0, 50, -10]} color={mainLightColor} intensity={20} />
      {lights.map(({ x, y, z }) => (
        <pointLight
          key={`${x}-${y}-${z}`}
          intensity={0.2}
          color={lightsColor}
          position={[x, y, z]}
        />
      ))}
    </>
  )
}

export default memo(Lights)
