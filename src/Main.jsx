import React from 'react'
import { makeStyles } from '@material-ui/core'
import Game from './parents/Game'
import SlidingDivider from './components/SlidingDivider'
import {useSelector} from 'react-redux'


const useStyles = makeStyles( themes => ({
  root: {
    width: '100vw',
    height: '100vh',
  },
  game: {
    padding: '5%'
  }
}))

export default function Main() {
  const isMobile = useSelector(state => state.general.isMobile)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isMobile ? <Game /> : <SlidingDivider pane1={<Game />} pane2={<Game />}/>}
    </div>
  )
}
