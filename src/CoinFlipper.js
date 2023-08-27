import React, { useState } from 'react';
import Coin from './Coin';

function CoinFlipper() {
  const [flips, setFlips] = useState(0);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [currentSide, setCurrentSide] = useState('');

  const handleFlip = () => {
    const randomSide = Math.random() < 0.5 ? 'heads' : 'tails';
    setFlips(flips + 1);
    setCurrentSide(randomSide);
    randomSide === 'heads' ? setHeadsCount(headsCount + 1) : setTailsCount(tailsCount + 1);
  };

  return (
    <div className="CoinFlipper">
      <h1>Coin Flipper</h1>
      <Coin side={currentSide} />
      <button onClick={handleFlip}>Flip Coin</button>
      <p>Flips: {flips}</p>
      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
    </div>
  );
}

export default CoinFlipper;
