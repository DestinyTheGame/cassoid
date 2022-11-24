import { barrels, mags, firstPerks, secondPerks } from './data.js';
import { factory } from './utilitybook';
import { Summary } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Summary',
  component: Summary,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//
// The actual different components and states of the components.
//
export const Sumup = factory(Summary)({
  perks: [
    ...barrels.slice(0, 1),
    ...mags.slice(0, 1),
    ...firstPerks.slice(0, 1),
    ...secondPerks.slice(0, 1)
  ],
  mod: 'minor',
  masterwork: 'stability',
  frame: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/65fdde950b85bdd1e0383e1016a73661.png'
  }
});
