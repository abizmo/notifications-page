import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Message from './Message';

export default {
  title: 'Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
};
