export type OnClick = (e: {
  dimension: Pick<RoomProps, 'dimension'>
  position: Pick<RoomProps, 'position'>
}) => void

export type RoomProps = {
  position: [number, number, number]
  dimension: [number, number, number]
  image: string
}
