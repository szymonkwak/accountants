import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';

describe('Spinner component tests', () => {
  it('renders succesfully', () => {
    render(<Spinner color="blue" />);
    expect(screen).not.toBeNull();
  });
});
