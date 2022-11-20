import { Telesto } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Telesto',
  component: Telesto
};

/**
 * Component factory for easily rendering multiple states of the component.
 *
 * @param {Object} [args={}] Component args.
 * @returns {Function} Functional component.
 * @public
 */
function example(args = {}) {
  const render = (props) => <Telesto { ...props } />
  render.args = args;

  return render;
};

//
// The actual different components and states of the components.
//
export const Error = example({
  title: 'TELESTO',
  reason: 'Everything is fine. No need for panic. The site is just experiencing some unexpected TELESTO. Please yell on Twitter if it still exists.'
});
