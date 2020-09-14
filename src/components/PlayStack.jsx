import React from 'react'
import Card from './Card'
import DragStack from './DragStack'
import { useSelector } from 'react-redux'

export default function PlayStack({stackIndex}) {

  const stack = useSelector(state => state.game.playStacks[stackIndex])
  const isMobile = useSelector(state => state.general.isMobile)

  const root = {
    width: isMobile ? '13vw' : '10vw'
  }
  const cardWrapper = {
    margin: '0 0 -100%'
  }

  const faceDown = stack.faceDown.map(((card) => {
    return (
      <div style={cardWrapper} key={card.encoding}>
        <Card card={card} faceDown/>
      </div>
    )
  }))

  return (
    <div style={root}>
      {faceDown}
      <DragStack subStack={stack.faceUp} stackIndex={stackIndex}/>
    </div>
  )
}
