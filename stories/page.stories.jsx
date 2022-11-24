import { factory } from './utilitybook';
import { item, items } from './data';
import { Page } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Page',
  component: Page,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const example = factory(Page);

//
// The actual different components and states of the components.
//
export const DefaultPage = example({
  items,
  children: <div>contents</div>
});
