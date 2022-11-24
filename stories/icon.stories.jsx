import { Icon, Mod, Masterwork, Squarecon } from '../src';
import { factory } from './utilitybook';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon',
  component: Icon,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const example = factory(Icon);

//
// The actual different components and states of the components.
//
export const IconBase = example({
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  description: 'Representation of the Main Ingredient gun model'
});

export const Watermark = example({
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  watermark: 'https://www.bungie.net/common/destiny2_content/icons/dd71a9a48c4303fd8546433d63e46cc7.png',
  description: 'Representation of the Main Ingredient gun model'
});

export const Large = example({
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  watermark: 'https://www.bungie.net/common/destiny2_content/icons/dd71a9a48c4303fd8546433d63e46cc7.png',
  description: 'Representation of the Main Ingredient gun model',
  size: 96
});

export const SquareBase = factory(Squarecon)({
  src: 'https://www.bungie.net/common/destiny2_content/icons/e81a8c8140243bd59ea988476dcb87b3.png',
  description: 'The minor spec mod, enjoyed by specific members of the Destiny Science community'
});

export const Mods = factory(Mod)({
  name: 'minor'
});

export const Masterworked = factory(Masterwork)({
  name: 'stability'
});
