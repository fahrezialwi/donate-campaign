import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('check text logo', () => {
  render(<App/>);
  const text = screen.getByText('Kitabisa');
  expect(text).toBeInTheDocument();
});

test('check wording button sorting by days left', () => {
  render(<App/>);
  const text = screen.getByText('Sorting by Days Left')
  expect(text).toBeInTheDocument();
});

test('check wording button sorting by donation goal', () => {
  render(<App/>);
  const button = screen.getByTestId('button-sort');
  userEvent.click(button)
  const text = screen.getByText('Sorting by Donation Goal')
  expect(text).toBeInTheDocument();
});