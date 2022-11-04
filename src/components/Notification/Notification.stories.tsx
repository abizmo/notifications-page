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

export const UnreadPrivateMessage = Template.bind({});
UnreadPrivateMessage.args = {
  children: (
    <Notification.Message>
      Hello, thanks for setting up the Chess Club. I’ve been a member for a few
      weeks now and I’m already having lots of fun and improving my game.
    </Notification.Message>
  ),
  userName: 'Mark Webber',
  unread: true,
};

export const ReadPrivateMessage = Template.bind({});
ReadPrivateMessage.args = {
  children: (
    <Notification.Message>
      Hello, thanks for setting up the Chess Club. I’ve been a member for a few
      weeks now and I’m already having lots of fun and improving my game.
    </Notification.Message>
  ),
  userName: 'Mark Webber',
};
