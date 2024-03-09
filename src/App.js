import { Routes, Route } from 'react-router-dom';
import Randomimg from './components/randomimg';
import Main from './components/main';
import React from 'react';

function App(){

  return(
    <>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/ramdomimg' element={<Randomimg/>} />
      </Routes>
    </> 
  )
}

export default App