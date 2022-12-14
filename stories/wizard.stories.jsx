import { barrels, mags, firstPerks, secondPerks } from './data.js';
import { factory } from './utilitybook';
import { Wizard } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Wizard',
  component: Wizard,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//
// The actual different components and states of the components.
//
export const Wizarding = factory(Wizard)({
  perks: {
    'component': barrels,
    'magazine': mags,
    'first-perk': firstPerks,
    'second-perk': secondPerks.map(function enhance(item) {
      return { ...item, enhanced: true }
    })
  }
});
