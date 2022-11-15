import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Image } from '../../src/components';

describe('Image', () => {
  it('should render a square image', () => {
    render(<Image imageUrl='images/avatar-anna-kim.webp' alt='anna' />);

    expect(screen.getByAltText('anna')).toBeDefined();
    expect(screen.getByAltText('anna').parentElement).not.toHaveClass('circle');
  });

  it('should render a circle image', () => {
    render(<Image imageUrl='images/avatar-anna-kim.webp' alt='anna' circle />);

    expect(screen.getByAltText('anna')).toBeDefined();
    expect(screen.getByAltText('anna').parentElement).toHaveClass('circle');
  });
});
