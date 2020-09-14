import React from 'react'
import { makeStyles } from '@material-ui/core'
import CardIcon from './CardIcon'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
}))

export default function CardValue({card, rotate}) {
  const classes = useStyles()

  const rotateStyle = {
    transform: 'rotate(180deg)'
  }

  return (
    <div className={classes.root} style={rotate ? rotateStyle : null}>
      <span style={{fontSize: '2vw', marginRight: '3%'}}>{card.value}</span>
      <CardIcon suit={card.suit} size="20%"/>
    </div>
  )
}
