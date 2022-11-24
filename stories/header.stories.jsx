import { factory } from './utilitybook';
import { Header } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Header,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const example = factory(Header);

//
// The actual different components and states of the components.
//
export const Basic = example({
  onSearch: function (value) {
    console.log('input', value);
  }
});
