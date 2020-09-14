import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'
import { drawNext, drawReset } from '../redux/gameSlice'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { last } from '../util/util' 
// import dragImage from '../images/pizza.png'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex'
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

  const [{isDragging}, drag, preview] = useDrag({
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
    width: isMobile ? '13vw' : '10vw',
    margin: isMobile ? '0 0 0 1vw' : '0 0 0 3vw',
    opacity: isDragging ? 0.5 : 1
  }

  return (
    <div className={classes.root}>
      <>
        {/* <DragPreviewImage connect={preview} src={dragImage} /> */}
        <div style={cardWrapper} ref={isFaceUp ? drag : null}>
        <Card card={last(drawStack.faceUp)}/>
        </div>
      </>
      <div style={cardWrapper} onClick={cycleThroughStack} >
      <Card card={last(drawStack.faceDown)} faceDown/>
      </div>
    </div>
  )
}
