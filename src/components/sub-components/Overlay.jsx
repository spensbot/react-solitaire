import React from 'react'

export default function Overlay({children, isNegative, isVisible}) {
  const root = {
    position: 'relative'
  }

  const overlay = {
    position: 'absolute',
    backgroundColor: isNegative ? 'red' : 'green',
    opacity: 0.5,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }

  return (
    <div style={root}>
      {children}
      {isVisible && <div style={overlay} />}
    </div>
  )
}
