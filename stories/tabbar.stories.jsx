import { Tabbar } from '../src';
import { factory } from './utilitybook';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabbar',
  component: Tabbar,
};

const example = factory(Tabbar);

//
// The actual different components and states of the components.
//
export const Tabs = example({
  tabs: [
    { name: 'normal', active: true },
    { name: 'adept' }
  ]
});
