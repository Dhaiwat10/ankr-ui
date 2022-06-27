import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, ITextProps } from './Text';

const meta: Meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ITextProps> = args => <Text {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  children:
    'Lets pretend this is a paragraph that actually means something because I have nothing else to say',
};
