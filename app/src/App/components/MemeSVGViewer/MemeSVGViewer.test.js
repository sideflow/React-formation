import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeSVGViewer from './MemeSVGViewer';

describe('<MemeSVGViewer />', () => {
  test('it should mount', () => {
    render(<MemeSVGViewer />);
    
    const memeSvgViewer = screen.getByTestId('MemeSVGViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});