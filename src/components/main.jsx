import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';

function Main(){
  return(
    <div className='main'>
      <p>랜덤르르 뽑기</p>
      <Link to='/ramdomimg'>
      <img alt='random' src={ process.env.PUBLIC_URL + 'random.png'} />
      </Link>
    </div>
  )
}

export default Main