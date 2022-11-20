const { useSelectiveState } = require('red/state/hook');
const { Bar, NumericBar } = require('red/pure');
const styles = require('./stats.module.css');
const { state } = require('red/state');
const { order } = require('../const');
const React = require('react');

/**
 * Calculate if the perk selection introduces new stat boosts.
 *
 * @param {Array} perks List of perks that are added.
 * @param {Boolean} add Do we want added or removed stats (debuffs)
 * @returns {Object} List of changes.
 * @private
 */
function calculate(perks, add) {
  return order.reduce(function reduce(memo, name) {
    memo[name] = name in memo ? memo[name] : 0;

    for (let perk of perks) {
      if (perk[name]) {
        if (perk[name] >= 0 && add) memo[name] += perk[name];
        if (perk[name] < 0 && remove) memo[name] -= perk[name];
      }
    }

    return memo;
  }, {});
}

function Stats(props) {
  const text = useSelectiveState(state.translations);
  const selection = useSelectiveState(state.selection);
  const removed = calculate(selection, false);
  const added = calculate(selection, true);

  const stats = order.reduce((name) => {
    if (!(name in props)) return null;

    return React.createElement(Bar, {
      key: name,
      name: text[name],
      base: props[name],
      added: added[name],
      removed: removed[name]
    });
  }).filter(Boolean);

  return (
    <aside className={ styles.statbar }>
      { stats }
    </aside>
  );
}

//
// Expose the component.
//
module.exports = require('red/export')({
  Stats: React.memo(Stats)
});
