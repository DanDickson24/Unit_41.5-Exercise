import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CoinFlipper from './CoinFlipper';

test('no coin image when the page loads', () => {
  const { queryByAltText } = render(<CoinFlipper />);
  const coinImage = queryByAltText('heads');

  expect(coinImage).toBeNull();
});

test('text updates properly when coin lands on heads', () => {
  const { getByText, getByAltText, getByTestId } = render(<CoinFlipper />);
  const flipButton = getByText('Flip Coin');

  fireEvent.click(flipButton);

  const coinImage = getByAltText('heads');
  const headsCount = getByTestId('heads-count');

  expect(coinImage).toBeInTheDocument();
  expect(headsCount).toHaveTextContent('Heads: 1');
});

test('text updates properly when coin lands on tails', () => {
  const { getByText, getByAltText, getByTestId } = render(<CoinFlipper />);
  const flipButton = getByText('Flip Coin');

  fireEvent.click(flipButton);
  fireEvent.click(flipButton);

  const coinImage = getByAltText('tails');
  const tailsCount = getByTestId('tails-count');

  expect(coinImage).toBeInTheDocument();
  expect(tailsCount).toHaveTextContent('Tails: 1');
});
