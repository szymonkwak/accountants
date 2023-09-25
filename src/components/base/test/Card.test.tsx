import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card component tests', () => {
  it('renders content', () => {
    const chilren = 'Test content';
    render(<Card>{chilren}</Card>);
    expect(screen.getByText(chilren)).toBeInTheDocument();
  });
});
