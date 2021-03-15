import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@material-ui/core'
import JumboSection from './components/home/jumboSection/JumboSection';
import WhatIsIt from './components/home/whatIsIt/WhatIsIt';
import Purpose from './components/home/purpose/Purpose';
import ForWhom from './components/home/forWhom/ForWhom';



function App() {
  return (
    <Box className="App">
      <JumboSection/>
      <WhatIsIt/>
      <Purpose/>
      <ForWhom/>
    </Box>
  );
}

export default App;
