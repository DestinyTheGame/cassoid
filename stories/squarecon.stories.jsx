import { factory } from './utilitybook';
import { Squarecon, Mod } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Squarecon',
  component: Squarecon,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//
// The actual different components and states of the components.
//
export const Basic = factory(Squarecon)({
  src: 'https://www.bungie.net/common/destiny2_content/icons/e81a8c8140243bd59ea988476dcb87b3.png',
  description: 'The minor spec mod, enjoyed by specific members of the Destiny Science community'
});

export const Mods = factory(Mod)({
  name: 'minor'
});
