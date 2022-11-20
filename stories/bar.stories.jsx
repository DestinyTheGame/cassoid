import { Bar } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Bar',
  component: Bar,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

/**
 * Component factory for easily rendering multiple states of the component.
 *
 * @param {Object} [args={}] Component args.
 * @returns {Function} Functional component.
 * @public
 */
function example(args = {}) {
  const render = (props) => <Bar { ...props } />
  render.args = args;

  return render;
};

//
// The actual different components and states of the components.
//
export const Base = example({
  name: 'Airborne Effectiveness',
  base: 8
});

export const Added = example({
  name: 'Stability',
  base: 47,
  added: 10
});

export const Removed = example({
  name: 'Reload',
  base: 47,
  removed: 10
});
