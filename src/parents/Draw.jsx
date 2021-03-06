import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { drawNext, drawReset } from '../redux/gameSlice'
import { useDrag } from 'react-dnd'
import { last } from '../util/util'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    width: '30%'
  },
}))

export default function Draw() {
  const classes = useStyles()

  const drawStack = useSelector(state => state.game.drawStacks[0])
  const isMobile = useSelector(state => state.general.isMobile)
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

  const cardWrapper = {
    width: isMobile ? '45%' : '40%',
    margin: isMobile ? '0 0 0 5%' : '0 0 0 10%',
    opacity: isDragging ? 0.5 : 1
  }

  return (
    <div className={classes.root}>
      <div style={cardWrapper} ref={isFaceUp ? drag : null}>
        <Card card={last(drawStack.faceUp)}/>
      </div>
      <div style={cardWrapper} onClick={cycleThroughStack} >
        <Card card={last(drawStack.faceDown)} faceDown/>
      </div>
    </div>
  )
}
