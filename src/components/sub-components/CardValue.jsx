import React from 'react'
import { makeStyles } from '@material-ui/core'
import CardIcon from './CardIcon'
import { useSelector } from 'react-redux'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
}))

export default function CardValue({card, rotate}) {
  const classes = useStyles()

  const isMobile = useSelector(state => state.general.isMobile)

  const rotateStyle = {
    transform: 'rotate(180deg)',
  }


  return (
    <div className={classes.root} style={rotate ? rotateStyle : null}>
      <span style={{fontSize: isMobile ? '3vw' : '2vw', marginRight: '3%'}}>{card.value}</span>
      <CardIcon suit={card.suit} size={isMobile ? '3vw' : '2vw'}/>
    </div>
  )
}
