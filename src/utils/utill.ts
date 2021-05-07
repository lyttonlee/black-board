
const getTwoPointDistance = (point1: {
  x: number,
  y: number
}, point2: {
  x: number,
  y: number
}): number => {
  const absX = Math.abs(point1.x - point2.x)
  const absY = Math.abs(point1.y - point2.y)
  return Math.sqrt(absX * absX + absY * absY)
}

export {
  getTwoPointDistance
}
