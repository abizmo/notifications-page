import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import UnreadDot from './UnreadDot';

export default {
  title: 'Components/UnreadDot',
  component: UnreadDot,
  argTypes: {
    show: {
      description: 'Control if Dot is shown or not',
      control: { type: 'boolean', require: false },
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof UnreadDot>;

const Template: ComponentStory<typeof UnreadDot> = (args) => (
  <UnreadDot {...args} />
);

export const Default = Template.bind({});
Default.args = {
  show: true,
};
