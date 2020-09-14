import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { drawNext, drawReset } from '../redux/gameSlice'
import { useDrag } from 'react-dnd'
import { last } from '../util/util' 

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex'
  },
  cardWrapper: {
    width: '10vw',
    margin: '0 0 0 3vw'
  }
}))

export default function Draw() {
  const classes = useStyles()

  const drawStack = useSelector(state => state.game.drawStacks[0])
  const dispatch = useDispatch()

  const isFaceUp = drawStack.faceUp.length > 0
  const isFaceDown = drawStack.faceDown.length > 0

  const cycleThroughStack = () => {
    if (isFaceDown)
      dispatch(drawNext())
    else 
      dispatch(drawReset())
  }

  const [{isDragging}, drag] = useDrag({
    item: {
      type: "CARDS",
      from: {
        key: "drawStacks",
        stackIndex: 0
      },
      cards: [last(drawStack.faceUp)],
      count: 1
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div className={classes.root}>
      <div className={classes.cardWrapper} ref={isFaceUp ? drag : null} style={{opacity: isDragging ? 0.5 : 1}}>
      <Card card={last(drawStack.faceUp)}/>
      </div>
      <div className={classes.cardWrapper} onClick={cycleThroughStack} >
      <Card card={last(drawStack.faceDown)} faceDown/>
      </div>
    </div>
  )
}
