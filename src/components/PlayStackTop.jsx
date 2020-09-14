import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { moveCards } from '../redux/gameSlice'
import { useDrop } from 'react-dnd'
import Overlay from './sub-components/Overlay'

const useStyles = makeStyles( theme => ({

}))

export default function PlayStackTop({children, stackIndex, drag, card}) {
  const classes = useStyles()

  const dispatch = useDispatch()

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "CARDS",
    drop: (item) => {
      return dispatch(moveCards({
        from: item.from,
        to: {
          key: "playStacks",
          stackIndex: stackIndex
        },
        cards: item.cards,
        count: item.count
      }))
    },
    canDrop: (item) => {
      const otherCard = item.cards[0]

      if (card) {
        if (otherCard.color !== card.color)
          if (otherCard.encoding % 13 === card.encoding % 13 - 1)
            return true
      } else {
        if (otherCard.value === 'K')
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

  function multiRef(el) {
    drag(el)
    drop(el)
    nothing(isOver)
  }

  return (
    <div className={classes.root} ref={multiRef}>
      <Overlay isVisible={canDrop} >
        {children}
      </Overlay>
    </div>
  )
}
