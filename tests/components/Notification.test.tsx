import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Notification } from '../../src/components';

describe('Notificaton', () => {
  afterEach(cleanup);
  const date = '2022-11-06T18:20:17.659Z';
  const user = {
    name: 'Mark Webber',
    avatar: 'images/avatar-mark-webber.webp',
  };
  vi.mock('../../src/utils', () => {
    return {
      getTimeAgo: vi.fn().mockReturnValue('8 Days'),
    };
  });
  const subject = 'Hello, World!';

  it('should render and matchSnapshot', () => {
    const { container } = render(
      <Notification date={date} user={user} unread={true}>
        <Notification.Subject>{subject}</Notification.Subject>
      </Notification>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should show username, subject, date and unreadDot', () => {
    render(
      <Notification date={date} user={user} unread={true}>
        <Notification.Subject>{subject}</Notification.Subject>
      </Notification>,
    );

    expect(screen.getByText(user.name)).toBeDefined();
    expect(screen.getByText(subject)).toBeDefined();
    expect(screen.getByText('8 Days')).toBeDefined();
    expect(screen.getByAltText(user.name)).toBeDefined();
    expect(screen.getByRole('status')).toBeDefined();
  });

  it('should show username, subject, date and no unreadDot', () => {
    render(
      <Notification date={date} user={user} unread={false}>
        <Notification.Subject>{subject}</Notification.Subject>
      </Notification>,
    );

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('should show the link', () => {
    render(
      <Notification date={date} user={user} unread={false}>
        <Notification.Subject>
          {subject}
          <Notification.Link href='#'>Test Link</Notification.Link>
        </Notification.Subject>
      </Notification>,
    );

    expect(screen.queryByText(/test link/i)).toBeInTheDocument();
  });

  it('should show the message', () => {
    render(
      <Notification date={date} user={user} unread={false}>
        <Notification.Subject>{subject}</Notification.Subject>
        <Notification.Message>Test Message</Notification.Message>
      </Notification>,
    );

    expect(screen.queryByText(/test message/i)).toBeInTheDocument();
  });

  it('should show the picture', () => {
    render(
      <Notification date={date} user={user} unread={false}>
        <Notification.Group>
          <Notification.Subject>{subject}</Notification.Subject>
          <Notification.Picture alt='Test Picture' src='#' />
        </Notification.Group>
      </Notification>,
    );

    expect(screen.queryByAltText(/test picture/i)).toBeInTheDocument();
  });
});
