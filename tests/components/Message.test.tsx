import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Message } from '../../src/components';

describe('Message', () => {
  it('should render', () => {
    render(<Message>Hello world!</Message>);

    expect(screen.getByText(/hello world/i)).toBeDefined();
  });
});
