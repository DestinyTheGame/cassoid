/**
 * Empty, but still functions. Which is quite the mood. This function will
 * be used as default value for components with optional props that are
 * functions.
 *
 * @type {Function}
 */
export function nope() {}

/**
 * White list of the names of the weapon selection.
 *
 * @type {Array}
 */
export const selection = [
  'component',      // Barrels, Scopes, Blade, etc
  'magazine',       // Magazine, Battery, Guard
  'first-perk',     // First trait, perk
  'second-perk',    // Second trait, perk
  'origin',         // Origin trait
  'masterwork',     // Different types of masterworks.
  'mod'             // Slotted mod.
];

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
  empty: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/54fa140e3e70ea7e5bd29b623ef75518.png'
  },
  minor: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/e81a8c8140243bd59ea988476dcb87b3.png'
  }
};

/**
 * List of masterwork options.
 *
 * @type {Object}
 * @TODO Statically generate this list from the API responses.
 */
export const masterworks = {
  empty: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/54fa140e3e70ea7e5bd29b623ef75518.png'
  },
  stability: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/50729e324ba7831fca684b911e9e1270.jpg'
  },
  handling: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/461561d0228f55cdc90db55f679f0697.jpg'
  },
  reload: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/3b9e5bcf72d7c44d19d5396dd97d913c.jpg'
  },
  draw: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/d14f883185c38e2a64e74b446c5d53b6.jpg'
  },
  accuracy: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/6f5e229b17129a3ee9dde187589adcdc.jpg'
  },
  blast: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/f47679637ac930fafb3d3631b3002912.jpg'
  },
  velocity: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/f0afe1ad6e598bd4b7473ee49ec53198.jpg'
  },
  impact: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/1a733f69d908fc7ebe0a183ca3e75b54.jpg'
  },
  chargetime: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/752037a87a129a57e68a9c8d5e3bb100.jpg'
  }
};
