import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'images/image-chess.webp',
  alt: 'chess',
};

export const Circle = Template.bind({});
Circle.args = {
  imageUrl: 'images/avatar-angela-gray.webp',
  alt: 'angela-gray',
  circle: true,
};
