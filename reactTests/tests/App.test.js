import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../../src/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My first App with ES6/i);
  expect(linkElement).toBeInTheDocument();
});
