/* eslint-disable react/no-unknown-property */
import { memo } from 'react'

import random from '../utils/helpers/random'
const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[0, 50, -10]} color="#312e81" intensity={10} />
      {Array.from({ length: 5 }).map((e, i) => (
        <pointLight
          key={i}
          intensity={random(0, 2)}
          color={i % 5 ? 'lightgrey' : 'lightblue'}
          position={[random(-150, 150), random(-150, 150), random(-150, 150)]}
        />
      ))}
    </>
  )
}

export default memo(Lights)
