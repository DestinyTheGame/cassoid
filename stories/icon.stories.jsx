import { Icon } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon',
  component: Icon,

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
  const render = (props) => <Icon { ...props } />
  render.args = args;

  return render;
};

//
// The actual different components and states of the components.
//
export const Basic = example({
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  description: 'Representation of the Main Ingredient gun model'
});

export const Watermark = example({
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  watermark: 'https://www.bungie.net/common/destiny2_content/icons/dd71a9a48c4303fd8546433d63e46cc7.png',
  description: 'Representation of the Main Ingredient gun model'
});

export const Large = example({
  src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
  watermark: 'https://www.bungie.net/common/destiny2_content/icons/dd71a9a48c4303fd8546433d63e46cc7.png',
  description: 'Representation of the Main Ingredient gun model',
  size: 96
});
