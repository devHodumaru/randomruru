import React, { useState, useEffect } from 'react';
import '../App.css';

function Randomimg(){
  const [jrrImgNum, setJrrImgNum] = useState(1);
  const [ramdomgame, setRandomGame] = useState(null);

  useEffect(() => {
    setRandomGame(setTimeout(() => {
      changeBackground();
    }, 280));
  }, [jrrImgNum]);

  let changeBackground = () => {
    setJrrImgNum(Math.floor(Math.random() * 70));
  };

  const stopRamdomgame = (e) => {
    console.log('주존사');
    clearTimeout(ramdomgame);
  };

  return(
    <>
      <p className="main">과연~~?!</p>
      <img
        onClick={stopRamdomgame} alt={`jrr${jrrImgNum}`} src={`${process.env.PUBLIC_URL}assets/jrr${jrrImgNum}.png`}
        id='img'
      />
    </>
  )
}

export default Randomimg
