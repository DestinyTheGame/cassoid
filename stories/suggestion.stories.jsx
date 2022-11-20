import { Suggestion, Suggestions } from '../src';
import { factory } from './utilitybook';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Suggestion',
  component: Suggestion,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const single = factory(Suggestion);
const multiple = factory(Suggestions);

const item = {
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  description: 'Representation of the Main Ingredient gun model',
  name: 'Main Ingredient',
  season: 13
};

const items = [
  item,
  { ...item, name: `Ice Breaker` },
  { ...item, name: `No Land Beyond` },
  { ...item, name: `Saladin's Vigil` },
  { ...item, name: `Dreg's Promise` }
]

//
// The actual different components and states of the components.
//
export const Single = single(item);

export const Multiple = multiple({ items });

export const Filtered = multiple({ items, search: 'la' });

export const Limited = multiple({ items, max: 3 });
