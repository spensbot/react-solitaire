import React from 'react'
import { makeStyles } from '@material-ui/core'
import FixedAspectRatio from './sub-components/FixedAspectRatio'
import CardIcon from './sub-components/CardIcon'
import CardValue from './sub-components/CardValue'

const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: '#dddddd',
    width: '100%',
    height: '100%',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5%',
    position: 'relative',
  },
  value: {
    fontSize: '10vh',
  },
  centerIcon: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function Card({card, faceDown}) {
  const classes = useStyles()

  if (!card) {
    return (
      <FixedAspectRatio ratio={1/1.4}>
        <div className={classes.root} style={{backgroundColor: '#eeeeee55'}}></div>
      </FixedAspectRatio>
    )
  } else if (faceDown) {
    return (
      <FixedAspectRatio ratio={1/1.4}>
        <div className={classes.root} style={{backgroundColor: '#aa4444', boxShadow: '2px 2px 10px 5px #00000066'}}></div>
      </FixedAspectRatio>
    )
  } else {
    let color = '#222222'
    if (card.color === 'red') color = '#992222'

    const style = {
      color: color,
      boxShadow: '2px 2px 10px 5px #00000066'
    }

    return (
      <FixedAspectRatio ratio={1/1.4}>
        <div className={classes.root} style={style}>
          <div className={classes.value}><CardValue card={card}/></div>
          <div className={classes.centerIcon}><CardIcon suit={card.suit} size="70%"/></div>
          <div className={classes.value}><CardValue card={card} rotate/></div>
        </div>
      </FixedAspectRatio>
    )
  }
}
