import React, { useEffect, useState } from 'react';

import { Header, Notification } from '../components';

import data, {
  Notification as NotificationType,
} from '../assets/notifications.json';

const NotifactionsPage = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    setNotifications(data);
  }, []);

  const unreadNotifications = !notifications
    ? 0
    : notifications.filter((notification) => notification.unread).length;

  const handleReadAll = () => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((notifcation) =>
        notifcation.unread ? { ...notifcation, unread: false } : notifcation,
      );
    });
  };

  const renderList = () => {
    if (!notifications || notifications.length === 0)
      return <p style={{ textAlign: 'center' }}>No notifications</p>;
    return (
      <ul className='grid' role='list'>
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
                    src={notification.picture.src}
                  />
                )}
              </Notification.Group>
              {!!notification.message && (
                <Notification.Message>
                  {notification.message.text}
                </Notification.Message>
              )}
            </Notification>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='container'>
      <Header
        unreadNotifications={unreadNotifications}
        title='Notifications'
        onReadAll={handleReadAll}
      />
      {renderList()}
    </div>
  );
};

export default NotifactionsPage;
