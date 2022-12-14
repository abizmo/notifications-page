import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Counter from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 0,
};
