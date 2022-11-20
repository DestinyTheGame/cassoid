import { barrels } from './data.js';
import { Perks } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Perks',
  component: Perks,
};

/**
 * Component factory for easily rendering multiple states of the component.
 *
 * @param {Object} [args={}] Component args.
 * @returns {Function} Functional component.
 * @public
 */
function example(args = {}) {
  const render = (props) => <Perks { ...props } />
  render.args = args;

  return render;
};

//
// The actual different components and states of the components.
//
export const Barrels = example({
  onChange: (e, item) => console.log('selected item', item),
  name: 'components',
  items: barrels
});

export const Active = example({
  onChange: (e, item) => console.log('selected item', item),
  name: 'components',
  active: 'arrowhead-break',
  items: barrels
});

export const Enhanced = example({
  onChange: (e, item) => console.log('selected item', item),
  name: 'components',
  active: 'arrowhead-break',
  items: barrels.map(function enhance(item) {
    return { ...item, enhanced: true }
  })
});

export const Row = example({
  onChange: (e, item) => console.log('selected item', item),
  direction: 'row',
  name: 'components',
  active: 'arrowhead-break',
  items: barrels
});
