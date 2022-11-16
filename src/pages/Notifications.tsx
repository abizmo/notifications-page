import React, { useEffect, useState } from 'react';

import { Header, NotificationsList } from '../components';

import data from '../assets/notifications.json';
import { Notification as NotificationType } from '../assets/notifications.d';

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

  return (
    <div className='container'>
      <Header
        unreadNotifications={unreadNotifications}
        title='Notifications'
        onReadAll={handleReadAll}
      />
      <NotificationsList notifications={notifications} />
    </div>
  );
};

export default NotifactionsPage;
