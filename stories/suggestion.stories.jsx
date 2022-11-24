import { Suggestion, Suggestions } from '../src';
import { factory } from './utilitybook';
import { item, items } from './data';
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

//
// The actual different components and states of the components.
//
export const Single = single(item);

export const Multiple = multiple({ items });

export const Filtered = multiple({ items, search: 'la' });

export const Limited = multiple({ items, max: 3 });
