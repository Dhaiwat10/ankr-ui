import React from 'react';
import { Meta } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta = {
  title: 'Headings',
  component: Heading,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Primary = () => {
  return (
    <div className="flex flex-col">
      <Heading variant="h1">Heading 1</Heading>
      <Heading variant="h2">Heading 2</Heading>
      <Heading variant="h3">Heading 3</Heading>
      <Heading variant="h4">Heading 4</Heading>
      <Heading variant="h5">Heading 5</Heading>
      <Heading variant="h6">Heading 6</Heading>
    </div>
  );
};
