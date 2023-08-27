import React from 'react';

function Coin({ side }) {
  const getImageUrl = () => {
    if (side === 'heads') {
      return 'https://www.usmint.gov/wordpress/wp-content/uploads/2022/10/2023-american-women-quarters-coin-uncirculated-obverse-philadelphia-768x768.jpg';
    } else if (side === 'tails') {
      return 'https://m.media-amazon.com/images/I/817eVN9TjWL._AC_SY200_QL15_.jpg';
    }
    return '';
  };

  return (
    <div className="Coin">
      <img src={getImageUrl()} alt={side} />
    </div>
  );
}

export default Coin;
