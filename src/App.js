import React, { useEffect } from 'react'
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { isTouchDevice } from './util/util'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMobile } from './redux/generalSlice'

const theme = createMuiTheme({});

function App() {

  const dispatch = useDispatch()
  const isMobile = useSelector(state => state.general.isMobile)

  dispatch(setIsMobile({
    isMobile: isTouchDevice()
  }))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Main />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
