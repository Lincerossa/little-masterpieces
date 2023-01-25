type Random = (min: number, max: number) => number

const random: Random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default random
