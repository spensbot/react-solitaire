import React, {useState} from 'react'

export default function SlidingDivider({pane1, pane2, width='0.8rem', height=null, color='#666666', initialPosition=50}) {

  const [splitPercent] = useState(initialPosition)

  if (width && height) {
    console.error("Width and height should not both be defined!!!")
  }

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  }
  const pane1Style = {
    flex: `${splitPercent} 0 0 `
  }
  const pane2Style = {
    flex: `${100-splitPercent} 0 0 `,
    backgroundColor: '#333333'
  }
  const dividerStyle = {
    width: width || '100%',
    height: height || '100%',
    backgroundColor: color
  }

  const onDrag = (e) => {
    console.log(e)
  }

  return (
    <div style={wrapperStyle}>
      <div style={pane1Style}>
        {pane1}
      </div>

      <div style={dividerStyle} draggable={true} onClick={onDrag} onDrag={onDrag} />

      <div style={pane2Style}>
        {pane2}
      </div>
    </div>
  )
}
