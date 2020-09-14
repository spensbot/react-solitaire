import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from './Card'
import { useDrag } from 'react-dnd'
import PlayStackTop from './PlayStackTop'

const useStyles = makeStyles( theme => ({
  dragWrapper: {
    margin: '0 0 -100% 0',
  }
}))

export default function DragStack({subStack, stackIndex}) {
  const classes = useStyles()

  const [{isDragging}, drag] = useDrag({
    item: {
      type: "CARDS",
      from: {
        key: "playStacks",
        stackIndex: stackIndex,
      },
      cards: subStack,
      count: subStack.length
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  })

  const inner = (
    <>
      <div className={classes.dragWrapper}>
        <Card card={subStack[0]}/>
      </div>
      { subStack.length > 1 &&
        <DragStack subStack={subStack.slice(1)} stackIndex={stackIndex}/>
      } 
    </> 
  )

  return (
    <div ref={subStack.length > 1 ? drag : null} style={isDragging ? {opacity: 0.5} : {}}>
      { subStack.length < 2 ?
        <PlayStackTop stackIndex={stackIndex} drag={drag} card={subStack[0] || null}>
          {inner}
        </PlayStackTop>
        :
        inner
      }
    </div>
  )
}