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
  unread?: boolean;
  userName: string;
}

const NotificationContext: Context<NotificationProps> = createContext(
  {} as NotificationProps,
);

const Notification = ({
  children,
  unread = false,
  userName,
}: PropsWithChildren<NotificationProps>) => {
  const classnames = [style.notification];
  const avatar = getImageUrl(userName);

  if (unread) classnames.push(style.notificationUnread);

  return (
    <NotificationContext.Provider value={{ unread, userName }}>
      <div className={classnames.join(' ')}>
        <div className={style.avatar}>
          <Image imageUrl={avatar} alt={userName} circle />
        </div>
        <div className={style.notificationBody}>{children}</div>
      </div>
    </NotificationContext.Provider>
  );
};

Notification.Message = function NotificationMessage({
  children,
}: PropsWithChildren) {
  return (
    <>
      <Notification.Body>sent you a private message</Notification.Body>
      <Message>{children}</Message>
    </>
  );
};

Notification.Body = function NotificationBody({ children }: PropsWithChildren) {
  const { userName, unread } = useContext(NotificationContext);
  return (
    <div className={style.notificationSubject}>
      <p>
        <span className={style.notificationUser}>{userName}</span> {children}{' '}
        <UnreadDot show={unread} />
      </p>
      <p className={style.notificationTimeAgo}>1m ago</p>
    </div>
  );
};

export default Notification;
