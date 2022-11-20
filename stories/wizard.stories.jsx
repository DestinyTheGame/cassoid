import { barrels, mags, firstPerks, secondPerks } from './data.js';
import { Wizard } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Wizard',
  component: Wizard,

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
  const render = (props) => <Wizard { ...props } />
  render.args = args;

  return render;
};

//
// The actual different components and states of the components.
//
export const Wizarding = example({
  perks: {
    'component': barrels,
    'magazine': mags,
    'first-perk': firstPerks,
    'second-perk': secondPerks.map(function enhance(item) {
      return { ...item, enhanced: true }
    })
  }
});
