import { factory } from './utilitybook';
import { Bar, Numeric } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Data',
  component: Bar,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const bar = factory(Bar);
const numb = factory(Numeric);

//
// The actual different components and states of the components.
//
export const BaseBar = bar({
  base: 8
});

export const AddedBar = bar({
  base: 47,
  added: 10
});

export const RemovedBar = bar({
  base: 47,
  removed: 10
});

export const BaseNumber = numb({
  base: 10
});

export const AddedNumb = numb({
  base: 10,
  added: 2
});

export const RemoveNumb = numb({
  base: 10,
  removed: 2
});
