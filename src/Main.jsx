import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Game from './parents/Game'
import SlidingDivider from './components/SlidingDivider'


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
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Game />
    </div>
  )
}