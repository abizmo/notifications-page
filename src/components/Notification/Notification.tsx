import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';
import { getTimeAgo } from '../../utils';

import { Image } from '../Image';
import { Message } from '../Message';
import { UnreadDot } from '../UnreadDot';

import style from './Notification.module.css';

interface NotificationProps {
  date: string;
  unread?: boolean;
  user: {
    name: string;
    avatar: string;
  };
}

const NotificationContext: Context<{
  date: string;
  unread: boolean;
  name: string;
}> = createContext({} as { date: string; unread: boolean; name: string });

const Notification = ({
  children,
  date,
  unread = false,
  user,
}: PropsWithChildren<NotificationProps>) => {
  const classnames = [style.notification];
  const { name, avatar } = user;

  if (unread) classnames.push(style.notificationUnread);

  return (
    <NotificationContext.Provider value={{ date, unread, name }}>
      <div className={classnames.join(' ')}>
        <div className={style.avatar}>
          <Image imageUrl={avatar} alt={name} circle />
        </div>
        <div className={style.notificationBody}>{children}</div>
      </div>
    </NotificationContext.Provider>
  );
};

// TODO: notificationGroup
Notification.Group = function NotificationGroup({
  children,
}: PropsWithChildren) {
  return <div className={style.notificationGroup}>{children}</div>;
};

// TODO: notificationSubject
Notification.Subject = function NotificationSubject({
  children,
}: PropsWithChildren) {
  const { date, unread, name } = useContext(NotificationContext);
  return (
    <div className={style.notificationSubject}>
      <p>
        <span className={style.notificationUser}>{name}</span> {children}
        <UnreadDot show={unread} />
      </p>
      <p className={style.notificationTimeAgo}>{getTimeAgo(date)}</p>
    </div>
  );
};

// TODO: add class notificationLink
Notification.Link = function NotificationLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className={style.notificationLink}>
      {children}
    </a>
  );
};

Notification.Picture = function NotificationPicture({
  alt,
  href,
  src,
}: {
  alt: string;
  href: string;
  src: string;
}) {
  return (
    <a href={href} className={style.notificationPicture}>
      <Image imageUrl={src} alt={alt} />
    </a>
  );
};

Notification.Message = function NotificationMessage({
  children,
}: PropsWithChildren) {
  return <Message>{children}</Message>;
};

export default Notification;
