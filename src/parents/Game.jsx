import React from 'react'
import { Box } from '@material-ui/core'
import Surface from '../components/Surface'
import Play from './Play'
import End from './End'
import Draw from './Draw'
import { useSelector } from 'react-redux'

export default function Main() {

  const isMobile = useSelector(state => state.general.isMobile)

  const root = {
    padding: isMobile ? '2%' : '5%'
  }

  return (
    <Surface>
      <div style={root}>
        <Box display="flex" justifyContent="space-between" marginBottom="5%">
          <End />
          <Draw />
        </Box>
        <Play />
      </div>
    </Surface>
  )
}
