import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from './Card'
import DragStack from './DragStack'
import { useSelector } from 'react-redux'


const useStyles = makeStyles( theme => ({
  root: {
    width: '10vw',
  },
  cardWrapper: {
    margin: '0 0 -100%'
  },
}))

export default function PlayStack({stackIndex}) {
  const classes = useStyles()

  const stack = useSelector(state => state.game.playStacks[stackIndex])

  const faceDown = stack.faceDown.map(((card) => {
    return (
      <div className={classes.cardWrapper}>
        <Card card={card} key={card.encoding} faceDown/>
      </div>
    )
  }))

  return (
    <div className={classes.root}>
      {faceDown}
      <DragStack subStack={stack.faceUp} stackIndex={stackIndex}/>
    </div>
  )
}
