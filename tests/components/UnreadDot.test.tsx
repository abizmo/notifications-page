import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { UnreadDot } from '../../src/components';

describe('UnreadDot', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(<UnreadDot show />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should not render', () => {
    render(<UnreadDot />);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
