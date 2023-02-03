/* eslint-disable react/no-unknown-property */
import { useControls } from 'leva'
import { memo } from 'react'

import random from '../utils/helpers/random'
const Lights = () => {
  const { lightsColor, mainLightColor, lightsQuantity } = useControls({
    lightsColor: '#a10de5',
    mainLightColor: '#312e81',
    lightsQuantity: { value: 10, min: 5, max: 20 },
  })
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[0, 50, -10]} color={mainLightColor} intensity={20} />
      {Array.from({ length: lightsQuantity }).map((e, i) => (
        <pointLight
          key={i}
          intensity={0.2}
          color={lightsColor}
          position={[random(-100, 100), random(10, 30), random(-50, -50)]}
        />
      ))}
    </>
  )
}

export default memo(Lights)
