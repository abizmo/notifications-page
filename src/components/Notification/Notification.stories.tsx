import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Notification from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const ReadPrivateMessage = Template.bind({});
ReadPrivateMessage.args = {
  children: (
    <>
      <Notification.Group>
        <Notification.Subject>sent you a private message</Notification.Subject>
      </Notification.Group>
      <Notification.Message>
        Hello, thanks for setting up the Chess Club. I’ve been a member for a
        few weeks now and I’m already having lots of fun and improving my game.
      </Notification.Message>
    </>
  ),
  timeAgo: '1m ago',
  userName: 'Mark Webber',
};

export const UnreadPrivateMessage = Template.bind({});
UnreadPrivateMessage.args = {
  ...ReadPrivateMessage.args,
  unread: true,
};

export const ReadFollow = Template.bind({});
ReadFollow.args = {
  ...ReadPrivateMessage.args,
  children: <Notification.Subject>followed you</Notification.Subject>,
};

export const UnreadFollow = Template.bind({});
UnreadFollow.args = {
  ...ReadFollow.args,
  unread: true,
};

export const ReadLink = Template.bind({});
ReadLink.args = {
  ...ReadPrivateMessage.args,
  children: (
    <Notification.Subject>
      reacted to your recent post{' '}
      <Notification.Link href='#'>My first tournament today!</Notification.Link>
    </Notification.Subject>
  ),
};

export const UnreadLink = Template.bind({});
UnreadLink.args = {
  ...ReadLink.args,
  unread: true,
};

export const ReadPicture = Template.bind({});
ReadPicture.args = {
  ...ReadPrivateMessage.args,
  children: (
    <Notification.Group>
      <Notification.Subject>commented on your picture</Notification.Subject>
      <Notification.Picture alt='Chess' src='images/image-chess.webp' />
    </Notification.Group>
  ),
};

export const UnreadPicture = Template.bind({});
UnreadPicture.args = {
  ...ReadPicture.args,
  unread: true,
};
