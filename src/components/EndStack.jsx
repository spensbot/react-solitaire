import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'
import { useDrop } from 'react-dnd'
import { last } from '../util/util'
import { useSelector, useDispatch } from 'react-redux'
import { moveCards } from '../redux/gameSlice'
import Overlay from './sub-components/Overlay'

const useStyles = makeStyles( theme => ({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}))

export default function EndStack({index}) {
  const classes = useStyles()

  const stack = useSelector(state => state.game.endStacks[index])
  const isMobile = useSelector(state => state.general.isMobile)
  const dispatch = useDispatch()

  const root = {
    position: "relative",
    width: isMobile ? '13vw': '10vw',
    margin: isMobile ? '0 1vw 0 0': '0 3vw 0 0'
  }

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "CARDS",
    drop: (item) => {
      return dispatch(moveCards({
        from: item.from,
        to: {
          key: "endStacks",
          stackIndex: index
        },
        cards: item.cards,
        count: item.count,
      }))
    },
    canDrop: (item) => {
      if (item.count === 1) {
        if (stack.faceUp.length === 0) {
          if (item.cards[0].encoding%13 === 0)
            return true
        } else if (item.cards[0].suit === last(stack.faceUp).suit)
          if (item.cards[0].encoding % 13 === last(stack.faceUp).encoding % 13 + 1 )
            return true
      }
      return false
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  function nothing(bool) {}
  nothing(isOver)
  
  return (
    <div style={root} ref={drop}>
      <Overlay isVisible={canDrop} >
        <Card card={last(stack.faceUp)}/>
      </Overlay>
    </div>
  )
}