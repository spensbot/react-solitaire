import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  children: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0'
  }
}))

export default function FixedAspectRatio({children, ratio, width='100%'}) {
  const classes = useStyles()

  const containerStyle = {
    paddingTop: `${100 / ratio}%`,
    width: width
  }

  return (
    <div className={classes.root} style={containerStyle}>
      <div className={classes.children}>
        {children}
      </div>
    </div>
  )
}
