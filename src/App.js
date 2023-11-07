import { Routes, Route } from 'react-router-dom';
import Randomimg from './components/randomimg';
import Main from './components/main';
import React from 'react';

function App(){

  return(
    <div>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/ramdomimg' element={<Randomimg/>} />
      </Routes>
    </div> 
  )
}

export default App