import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  it('render Order component', () => {
    render(<Home />);
    screen.debug();
    expect(screen.getByText(/The Codibly's task/i)).toBeInTheDocument();
    expect(screen.queryByText(/zzzzzzzzz/i)).toBeNull();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
