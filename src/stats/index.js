import styles from './stats.module.css';
import React, { useMemo } from 'react';
import { order } from '../const';
import exporter from 'red/export';
import { Bar, Numeric } from 'red/pure';

/**
 * Calculate if the perk selection introduces new stat boosts.
 *
 * @param {Array} perks List of perks that are added.
 * @param {Boolean} add Do we want added or removed stats (debuffs)
 * @returns {Object} List of changes.
 * @private
 */
function calculate(perks, mode) {
  if (!Array.isArray(perks)) return {};

  return order.reduce(function reduce(memo, name) {
    memo[name] = name in memo ? memo[name] : 0;

    for (let perk of perks) {
      if (perk.stats && perk.stats[name]) {
        if (perk.stats[name] >= 0 && mode === true) memo[name] += perk.stats[name];
        if (perk.stats[name] < 0 && mode === false) memo[name] -= perk.stats[name];
      }
    }

    return memo;
  }, {});
}

/**
 * Helper function that serves the right component based on which start bar
 * is requested. Some stats require different charts for information to be
 * displayed.
 *
 * @param {String} stat [description]
 * @param {Number} base The default value of the stat.
 * @param {Number} added Optional additions.
 * @param {Number} removed Optional removals.
 * @returns {React.Component} The selected component.
 * @private
 */
function bartender(stat, base, added, removed) {
  switch (stat) {
    case 'mag':
    case 'chargetime':
    case 'rd':
      return <Numeric base={ base } added={ added } removed={ removed } />
  }

  return <Bar base={ base } added={ added } removed={ removed } />
}

/**
 * Representation of weapon stats. Influenced by selection of perks, mw.
 *
 * @param {[type]} selection [description]
 * @param {[type]} props [description]
 * @public
 */
function Stats({ selection, ...props }) {
  const stats = useMemo(function generate() {
    const removed = calculate(selection, false);
    const added = calculate(selection, true);

    return order.map((key) => {
      if (!(key in props)) return null;

      return (
        <tr className={ styles.stat } key={ key }>
          <td className={ styles.name}>
            { key }
          </td>
          <td className={ styles.value }>
            { bartender(key, props[key], added[key], removed[key]) }
          </td>
        </tr>
      );
    }).filter(Boolean);
  }, [ selection ]);

  return (
    <table className={ styles.stats }>
      <tbody>
        { stats }
      </tbody>
    </table>
  );
}

//
// Expose the component.
//
exporter({ Stats });
