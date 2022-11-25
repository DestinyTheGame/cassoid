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
 * @param {Number} [max=100] Maximum value of the stat.
 * @param {Number} base The default stat.
 * @param {Number} added Points added through perks.
 * @param {Number} removed Points removed through perks.
 * @param {String} suffix Content after the numeric value.
 * @param {String} prefix Content before the numeric value.
 * @public
 */
export function Numeric({ base, added, removed, max, suffix='', prefix='' }) {
  let classNames = [styles.numeric];
  let value = base;
  let indicator = '';

  if (added) value += added;
  if (removed) value -= removed;

  if (value > base) {
    classNames.push(styles.added);
    indicator = '▲';
  } else if (value < base) {
    classNames.push(styles.removed);
    indicator = '▼';
  } else {
    classNames.push(styles.base);
  }

  return (
    <div className={ classNames.join(' ') }>
      {prefix}{Math.min(value, max || Infinity)}{suffix} {indicator}
    </div>
  );
}

/**
 * Directional radar, indicates the direction of recoil.
 *
 * @param {Number} base The default stat.
 * @param {Number} added Points added through perks.
 * @param {Number} removed Points removed through perks.
 * @param {Number} [size=19] The size of the graph.
 * @public
 */
export function Direction({ base, added, removed, size=19 }) {
  let value = base;

  if (added) value += added;
  if (removed) value -= removed;

  const f = Math.sin((value + 5) * (Math.PI / 10)) * (100 - value) * 0.8 * (Math.PI / 180);
  const u = Math.sin(f);
  const c = Math.cos(f);
  const k = (100 - value) / 100 * (180 / 2) * (Math.PI / 180) * Math.sign(f);
  const m = Math.sin(f + k);
  const a = Math.cos(f + k);
  const t = Math.sin(f - k);
  const h = Math.cos(f - k);
  const draw = `M1,1 L${1 + m},${1 - a} A1,1 0 0,${f < 0 ? '1' : '0'} ${1 + t},${1 - h} Z`;

  return (
    <svg height={ size } viewBox='0 0 2 1'>
      <circle r={ 1 } cx={ 1 } cy={ 1 } fill='rgba(0, 0, 0, 0.5)' />

      {
        value < 95
        ? <path d={ draw } fill='currentColor' />
        : <line x1={ 1 - u } y1={ 1 + c } x2={ 1 + u } y2={ 1 - c } stroke='currentColor' strokeWidth='0.1' />
      }
    </svg>
  )
}

exporter({
  Bar: React.memo(Bar),
  Numeric: React.memo(Numeric),
  Direction: React.memo(Direction)
});
