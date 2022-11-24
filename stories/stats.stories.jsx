import { stats, barrels, mags } from './data';
import { factory } from './utilitybook';
import { Stats } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Stats',
  component: Stats,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const example = factory(Stats);

//
// The actual different components and states of the components.
//
export const Base = example({
  ...stats
});

export const Barrels = example({
  ...stats,

  selection: [
    ...barrels.slice(0, 1)
  ]
});

export const BarrelsAndMag = example({
  ...stats,

  selection: [
    ...barrels.slice(0, 1),
    ...mags.slice(0, 1)
  ]
});

export const BarrelsMagAndMW = example({
  ...stats,

  selection: [
    ...barrels.slice(0, 1),
    ...mags.slice(0, 1),

    { stats: { stability: 10 }}
  ]
});

export const BarrelsMagMWAndMod = example({
  ...stats,

  selection: [
    ...barrels.slice(0, 1),
    ...mags.slice(0, 1),

    { stats: { stability: 10 }},
    { stats: { rd: 25 }}
  ]
});
