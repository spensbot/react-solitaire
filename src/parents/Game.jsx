import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Surface from '../components/Surface'
import Play from './Play'
import End from './End'
import Draw from './Draw'


const useStyles = makeStyles( themes => ({
  game: {
    padding: '5%'
  }
}))

export default function Main() {
  const classes = useStyles()

  return (
    <Surface>
      <div className={classes.game}>
        <Box display="flex" justifyContent="space-between" marginBottom="5%">
          <End />
          <Draw />
        </Box>
        <Play />
      </div>
    </Surface>
  )
}
