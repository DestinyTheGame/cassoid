import styles from './dataisbeautiful.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * Representation of a single statbar.
 *
 * @param {Number} [max=100] Maximum value of the stat.
 * @param {Number} base The default stat.
 * @param {Number} added Points added through perks.
 * @param {Number} removed Points removed through perks.
 * @public
 */
export function Bar({ base, added, removed, max = 100 }) {
  let value = base;

  if (added) value += added;
  if (removed) value -= removed;

  return (
    <div className={ styles.bars } style={{ width: `${max}%` }}>
      <div className={`${styles.bar} ${styles.basebg}`} style={{ width: `${base}%` }} />
      { value > base && <div className={`${styles.bar} ${styles.addedbg}`} style={{ width: `${added}%`, left: `${base}%` }} /> }
      { value < base && <div className={`${styles.bar} ${styles.removedbg}`} style={{ width: `${removed}%`, left: `${base - removed}%` }} /> }
    </div>
  );
}

/**
 * Representation of a numeric value.
 *
 * @param {Number} base The default stat.
 * @param {Number} added Points added through perks.
 * @param {Number} removed Points removed through perks.
 * @public
 */
export function Numeric({ base, added, removed }) {
  let classNames = [styles.numeric];
  let value = base;
  let suffix = '';

  if (added) value += added;
  if (removed) value -= removed;

  if (value > base) {
    classNames.push(styles.added);
    suffix = '▲';
  } else if (value < base) {
    classNames.push(styles.removed);
    suffix = '▼';
  } else {
    classNames.push(styles.base);
  }

  return (
    <div className={ classNames.join(' ') }>
      {value} {suffix}
    </div>
  );
}

exporter({
  Bar: React.memo(Bar),
  Numeric: React.memo(Numeric)
});
