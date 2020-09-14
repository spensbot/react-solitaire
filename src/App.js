import React from 'react';
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Main />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
