/* eslint-disable react/no-unknown-property */
import { memo } from 'react'

import random from '../utils/helpers/random'
const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[0, 50, -10]} color="#312e81" intensity={10} />
      {Array.from({ length: 20 }).map((e, i) => (
        <pointLight
          key={i}
          intensity={0.2}
          color={i % 2 ? '#312e81' : '#ea580c'}
          position={[random(-200, 200), random(10, 30), random(-50, -100)]}
        />
      ))}
    </>
  )
}

export default memo(Lights)
