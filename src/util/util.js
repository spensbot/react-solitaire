export function last(array) {
  const length = array.length
  if (length > 0) {
    return array[length - 1]
  }
  return null
}

export function isTouchDevice() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
    return true
}