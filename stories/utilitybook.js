import { MemoryRouter } from 'react-router-dom';
import React from 'react';

/**
 * Creates a storybook factory function for the given component.
 *
 * @param {React.Component} Component Component to consume.
 * @returns {Function} Factory.
 */
export function factory(Component) {
  /**
   * Component factory for easily rendering multiple states of the component.
   *
   * @param {Object} [args={}] Component args.
   * @returns {Function} Functional component.
   * @public
   */
  return function example(args = {}) {
    const render = (props) => (
      <MemoryRouter>
        <Component { ...props } />
      </MemoryRouter>
    );

    render.args = args;
    return render;
  };
}
