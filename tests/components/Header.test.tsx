import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Header } from '../../src/components';

describe('Header', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <Header
        unreadNotifications={88}
        title='Notification Test'
        onReadAll={() => {}}
      />,
    );

    expect(screen.getByText('88')).toBeInTheDocument();
    expect(screen.getByText(/notification test/i)).toBeInTheDocument();
  });

  it('should call onReadAll when click the button', () => {
    const onReadAll = vi.fn(() => {});

    render(
      <Header
        unreadNotifications={88}
        title='Notification Test'
        onReadAll={onReadAll}
      />,
    );
    const button = screen.getByText(/mark all as read/i);

    fireEvent.click(button);

    expect(onReadAll).toHaveBeenCalled();
  });
});
