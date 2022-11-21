/**
 * Empty, but still functions. Which is quite the mood. This function will
 * be used as default value for components with optional props that are
 * functions.
 *
 * @type {Function}
 */
export function nope() {}

/**
 * Order in which the stat bars will be presented to our users.
 *
 * @type {Array}
 */
export const order = [
  'blast',        // Blast Radius
  'velocity',     // Velocity
  'impact',       // Impact
  'swing',        // Swing Speed
  'charge-rate',  // Charge Rate
  'guard-res',    // Guard Resistance
  'guard-eff',    // Guard Effeciency
  'guard-end',    // Guard Endurance
  'accuracy',     // Accuracy
  'range',        // Range
  'stability',    // Stability
  'handling',     // Handling
  'reload',       // Reload
  'aa',           // Aim Assistance
  'ae',           // Airborne Effectiveness
  'zoom',         // Zoom
  'rd',           // Recoil Direction
  'rpm',          // Rounds Per Minute
  'chargetime',   // Charge Time
  'draw',         // Draw speed
  'mag'           // Magazine
];

/**
 * List of weapon mods.
 *
 * @type {Object}
 * @TODO Statically generate this list from the API responses.
 */
export const mods = {
  minor: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/e81a8c8140243bd59ea988476dcb87b3.png'
  }
};
