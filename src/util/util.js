export function last(array) {
  const length = array.length
  if (length > 0) {
    return array[length - 1]
  }
  return null
}