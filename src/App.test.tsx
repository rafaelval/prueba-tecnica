import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el texto principal', () => {
  render(<App />);
  const headingElement = screen.getByText(/¡Hola, mundo!/i);
  expect(headingElement).toBeInTheDocument();
});
