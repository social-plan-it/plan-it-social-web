import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../app/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryRounded: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const PrimaryFullyRounded: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const SecondaryRounded: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const SecondaryFullyRounded: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};
