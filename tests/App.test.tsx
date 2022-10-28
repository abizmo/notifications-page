import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('App', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.getByText(/notifications/i)).toBeDefined();
  });
});
