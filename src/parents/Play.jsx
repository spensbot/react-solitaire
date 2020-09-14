import React from 'react'
import { makeStyles } from '@material-ui/core'
import PlayStack from '../components/PlayStack'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default function Play() {
  const classes = useStyles()

  const playStacks = []
  for (let i=0 ; i<7 ; i++){
    playStacks.push(<PlayStack stackIndex={i} key={i}/>)
  }

  return (
    <div className={classes.root}>
      {playStacks}
    </div>
  )
}
