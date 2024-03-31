import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonStyles, variants } from '../app/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.values(variants),
      control: { type: 'select' },
    },
    buttonStyle: {
      options: Object.values(buttonStyles),
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryRounded: Story = {
  args: {
    variant: 'primary',
    buttonStyle: 'rounded',
    children: 'Button',
  },
};

export const PrimaryFullyRounded: Story = {
  args: {
    variant: 'primary',
    buttonStyle: 'fullyRounded',
    children: 'Button',
  },
};

export const SecondaryRounded: Story = {
  args: {
    variant: 'secondary',
    buttonStyle: 'rounded',
    children: 'Button',
  },
};

export const SecondaryFullyRounded: Story = {
  args: {
    variant: 'secondary',
    buttonStyle: 'fullyRounded',
    children: 'Button',
  },
};
