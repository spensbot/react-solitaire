import React from 'react'
import { makeStyles } from '@material-ui/core'
import EndStack from '../components/EndStack'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
  }
}))

export default function End() {
  const classes = useStyles()

  const indexes = []

  for (let i=0 ; i<4 ; i++){
    indexes.push(i)
  }

  return (
    <div className={classes.root}>
      {indexes.map( (index) => {
        return <EndStack index={index} key={index}/>
      })}
    </div>
  )
}
