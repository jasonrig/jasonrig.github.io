import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import AppBar from "./AppBar";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
   <Grommet theme={theme}>
     <AppBar>Hello</AppBar>
   </Grommet>
  );
}

export default App;
