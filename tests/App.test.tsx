import { render, screen } from '@testing-library/react';
// import { composeStories } from '@storybook/testing-react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../src/App';
// import * as buttons from '../src/stories/Button.stories';

// const { Primary } = composeStories(buttons);

describe('App', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.getByText(/notification/i)).toBeDefined();
  });
});
