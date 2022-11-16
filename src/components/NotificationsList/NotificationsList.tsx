import React from 'react';
import type { Notification as NotificationType } from '../../assets/notifications';

import Notification from '../Notification/Notification';

const NotificationsList = ({
  notifications,
}: {
  notifications: NotificationType[];
}) => {
  if (!notifications || notifications.length === 0)
    return <p style={{ textAlign: 'center' }}>No notifications</p>;

  const gridGapStyle = { '--gap': 'var(--sz-2)' } as React.CSSProperties;

  return (
    <ul className='grid' role='list' style={gridGapStyle}>
      {notifications.map((notification) => (
        <li key={notification.id}>
          <Notification
            date={notification.date}
            user={notification.user}
            unread={notification.unread}
          >
            <Notification.Group>
              <Notification.Subject>
                {notification.subject}
                {!!notification.link && (
                  <>
                    {' '}
                    <Notification.Link href={notification.link.url}>
                      {notification.link.label}
                    </Notification.Link>
                  </>
                )}
              </Notification.Subject>
              {!!notification.picture && (
                <Notification.Picture
                  alt={notification.picture.alt}
                  href={notification.picture.url}
                  src={notification.picture.src}
                />
              )}
            </Notification.Group>
            {!!notification.message && (
              <Notification.Message href={notification.message.url}>
                {notification.message.text}
              </Notification.Message>
            )}
          </Notification>
        </li>
      ))}
    </ul>
  );
};

export default NotificationsList;
