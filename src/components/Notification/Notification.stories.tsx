import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Notification from './Notification';

import notifications from '../../assets/notifications.json';

export default {
  title: 'Components/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const MessageTemplate: ComponentStory<typeof Notification> = (args) => {
  const { user, unread, date } = args;
  return (
    <Notification user={user} unread={unread} date={date}>
      <Notification.Group>
        <Notification.Subject>{notifications[3].subject}</Notification.Subject>
      </Notification.Group>
      <Notification.Message href={notifications[3].message?.url as string}>
        {notifications[3].message?.text}
      </Notification.Message>
    </Notification>
  );
};

export const ReadPrivateMessage = MessageTemplate.bind({});
ReadPrivateMessage.args = {
  user: notifications[3].user,
  unread: false,
  date: notifications[3].date,
};

export const UnreadPrivateMessage = MessageTemplate.bind({});
UnreadPrivateMessage.args = {
  ...ReadPrivateMessage.args,
  unread: true,
};

const FollowTemplate: ComponentStory<typeof Notification> = (args) => {
  const { user, unread, date } = args;
  return (
    <Notification user={user} unread={unread} date={date}>
      <Notification.Group>
        <Notification.Subject>{notifications[3].subject}</Notification.Subject>
      </Notification.Group>
    </Notification>
  );
};

export const ReadFollow = FollowTemplate.bind({});
ReadFollow.args = {
  user: notifications[1].user,
  date: notifications[1].date,
  unread: false,
};

export const UnreadFollow = FollowTemplate.bind({});
UnreadFollow.args = {
  ...ReadFollow.args,
  unread: true,
};

const LinkTemplate: ComponentStory<typeof Notification> = (args) => {
  const { user, unread, date } = args;
  return (
    <Notification user={user} unread={unread} date={date}>
      <Notification.Subject>
        {notifications[6].subject}{' '}
        <Notification.Link href={notifications[6].link?.url as string}>
          {notifications[6].link?.label}
        </Notification.Link>
      </Notification.Subject>
    </Notification>
  );
};

export const ReadLink = LinkTemplate.bind({});
ReadLink.args = {
  user: notifications[6].user,
  date: notifications[6].date,
  unread: false,
};

export const UnreadLink = LinkTemplate.bind({});
UnreadLink.args = {
  ...ReadLink.args,
  unread: true,
};

const PictureTemplate: ComponentStory<typeof Notification> = (args) => {
  const { user, unread, date } = args;
  return (
    <Notification user={user} unread={unread} date={date}>
      <Notification.Group>
        <Notification.Subject>{notifications[4].subject} </Notification.Subject>
        <Notification.Picture
          alt={notifications[4].picture?.alt as string}
          href={notifications[4].picture?.url as string}
          src={notifications[4].picture?.src as string}
        />
      </Notification.Group>
    </Notification>
  );
};

export const ReadPicture = PictureTemplate.bind({});
ReadPicture.args = {
  user: notifications[4].user,
  date: notifications[4].date,
  unread: false,
};

export const UnreadPicture = PictureTemplate.bind({});
UnreadPicture.args = {
  ...ReadPicture.args,
  unread: true,
};
