import React from 'react'
import { makeStyles } from '@material-ui/core'

const lightColor = '#33663300'
const darkColor = '#22442255'
const backgroundColor = '#336633'
const hashWidth = 2
const hashBlend = 3
const hashSpacing = 10

const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: '-1000',
    backgroundColor: backgroundColor
  },
  forwardHash: {
    width: '100%',
    height: '100%',
    background: `repeating-linear-gradient(
      45deg,
      ${darkColor},
      ${darkColor} ${hashWidth}px,
      ${lightColor} ${hashWidth + hashBlend}px,
      ${lightColor} ${hashWidth + hashBlend + hashSpacing}px
    )`
  },
  backHash: {
    width: '100%',
    height: '100%',
    background: `repeating-linear-gradient(
      135deg,
      ${darkColor},
      ${darkColor} ${hashWidth}px,
      ${lightColor} ${hashWidth + hashBlend}px,
      ${lightColor} ${hashWidth + hashBlend + hashSpacing}px
    )`
  }
}))

export default function Surface({children}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.forwardHash}>
        <div className={classes.backHash}>
          {children}
        </div>
      </div>
    </div>
  )
}
