import { Slots, Masterwork } from '../src';
import { masterworks } from '../src/const';
import { factory } from './utilitybook';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Slots',
  component: Slots,
};

const example = factory(Slots);
const { empty, ...normal } = masterworks;

//
// The actual different components and states of the components.
//
export const Masterworking = example({
  title: 'Weapon Mods',
  name: 'mw',
  Slot: Masterwork,
  items: {
    Normal: Object.keys(masterworks),
    Adept: Object.keys(normal)
  }
});
