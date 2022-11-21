import { factory } from './utilitybook';
import { Telesto } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Telesto',
  component: Telesto
};

//
// The actual different components and states of the components.
//
export const Error = factory(Telesto)({
  title: 'TELESTO',
  reason: 'Everything is fine. No need for panic. The site is just experiencing some unexpected TELESTO. Please yell on Twitter if it still exists.'
});
