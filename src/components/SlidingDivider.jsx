import React from 'react'

export default function SlidingDivider({pane1, pane2, width='1rem', height=null, color='#666666', initialPosition=50}) {

  if (width && height) {
    console.error("Width and height should not both be defined!!!")
  }

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'row'
  }
  const pane1Style = {
    flex: `${initialPosition} 0 0 `
  }
  const pane2Style = {
    flex: `${100-initialPosition} 0 0 `,
    backgroundColor: '#333333'
  }
  const dividerStyle = {
    width: width || '100%',
    height: height || '100%',
    backgroundColor: color
  }

  return (
    <div className={wrapperStyle}>
      <div style={pane1Style}>
        {pane1}
      </div>

      <div style={dividerStyle} />

      <div style={pane2Style}>
        {pane2}
      </div>
    </div>
  )
}
