import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '../app/components/ui/images';

const meta: Meta<typeof Image> = {
  title: 'ui/Images',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const ShortText: Story = {
  args: {
    alt: 'alternative image text',
    src: 'https://via.placeholder.com/100',
    width: 100,
    height: 100,
    priority: true,
  },
};
