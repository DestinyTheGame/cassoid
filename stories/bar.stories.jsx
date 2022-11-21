import { factory } from './utilitybook';
import { Bar } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Bar',
  component: Bar,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const example = factory(Bar);

//
// The actual different components and states of the components.
//
export const Base = example({
  name: 'Airborne Effectiveness',
  base: 8
});

export const Added = example({
  name: 'Stability',
  base: 47,
  added: 10
});

export const Removed = example({
  name: 'Reload',
  base: 47,
  removed: 10
});
