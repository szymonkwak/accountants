import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component tests', () => {
  it('renders succesfully', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders content', () => {
    const chilren = 'Test content';
    render(<Button>{chilren}</Button>);
    expect(screen.getByText(chilren)).toBeInTheDocument();
  });
});
