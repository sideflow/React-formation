import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeEditor from './MemeEditor';

describe('<MemeEditor />', () => {
  test('it should mount', () => {
    render(<MemeEditor />);
    
    const memeEditor = screen.getByTestId('MemeEditor');

    expect(memeEditor).toBeInTheDocument();
  });
});