import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    onReadAll: { action: 'Read All' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  unreadNotifications: 3,
  title: 'Notifications',
};
