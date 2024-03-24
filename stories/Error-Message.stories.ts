import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from '../app/components/ui/error-message';

const meta: Meta<typeof ErrorMessage> = {
  title: 'ui/Error-Message',
  component: ErrorMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const ShortText: Story = {
  args: {
    children: 'children',
  },
};
