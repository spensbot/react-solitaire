import React from 'react'
import { Box } from '@material-ui/core'
import Surface from '../components/Surface'
import Play from './Play'
import End from './End'
import Draw from './Draw'
import { useSelector } from 'react-redux'
import FixedAspectRatio from '../components/sub-components/FixedAspectRatio'

export default function Game() {

  const isMobile = useSelector(state => state.general.isMobile)

  const container = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
  const root = {
    padding: isMobile ? '5% 1%' : '5%',
    maxWidth: '100vh',
    width: '100%'
  }

  return (
    <Surface>
      <div style={container}>
        <div style={root}>
          <FixedAspectRatio ratio={4} >
            <Box width="100%" display="flex" justifyContent="space-between" marginBottom="5%">
              <End />
              <Draw />
            </Box>
          </FixedAspectRatio>
          <Play />
        </div>
      </div>
    </Surface>
  )
}
