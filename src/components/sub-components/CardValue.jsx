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
      {/* <FixedAspectRatio width={'25%'} ratio={1.5}>
        <svg width="100%" height="100%">
          <text x="0" y="20" fontSize="20%" fill="black">{card.value}</text>
        </svg>
      </FixedAspectRatio> */}
      <span style={{fontSize: isMobile ? '2.5vw' : '1.3vw', marginRight: '3%'}}>{card.value}</span>
      <CardIcon suit={card.suit} size={isMobile ? '25%' : '20%'}/>
    </div>
  )
}
