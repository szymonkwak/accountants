import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Link from '../Link';

describe('Link component tests', () => {
  it('renders anchor element', () => {
    const chilren = 'Test content';
    render(
      <BrowserRouter>
        <Link to="/">{chilren}</Link>
      </BrowserRouter>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('renders content', () => {
    const chilren = 'Test content';
    render(
      <BrowserRouter>
        <Link to="/">{chilren}</Link>
      </BrowserRouter>
    );
    expect(screen.getByText(chilren)).toBeInTheDocument();
  });
});
