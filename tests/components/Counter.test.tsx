import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Counter } from '../../src/components';

describe('Counter', () => {
  it('should render', () => {
    render(<Counter>3</Counter>);

    expect(screen.getByText('3')).toBeDefined();
  });
});
