import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import { getImageUrl } from '../../utils';
import { Image } from '../Image';
import { Message } from '../Message';
import { UnreadDot } from '../UnreadDot';

import style from './Notification.module.css';

interface NotificationProps {
  timeAgo: string;
  unread?: boolean;
  userName: string;
}

const NotificationContext: Context<NotificationProps> = createContext(
  {} as NotificationProps,
);

const Notification = ({
  children,
  timeAgo,
  unread = false,
  userName,
}: PropsWithChildren<NotificationProps>) => {
  const classnames = [style.notification];
  const avatar = getImageUrl(userName);

  if (unread) classnames.push(style.notificationUnread);

  return (
    <NotificationContext.Provider value={{ timeAgo, unread, userName }}>
      <div className={classnames.join(' ')}>
        <div className={style.avatar}>
          <Image imageUrl={avatar} alt={userName} circle />
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
  const { timeAgo, unread, userName } = useContext(NotificationContext);
  return (
    <div className={style.notificationSubject}>
      <p>
        <span className={style.notificationUser}>{userName}</span> {children}
        <UnreadDot show={unread} />
      </p>
      <p className={style.notificationTimeAgo}>{timeAgo}</p>
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

// TODO: notificationPicture
Notification.Picture = function NotificationPicture({
  alt,
  src,
}: {
  alt: string;
  src: string;
}) {
  return (
    <a href='#' className={style.notificationPicture}>
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
