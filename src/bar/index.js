import styles from './bar.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * Representation of a single statbar.
 *
 * @param {String} name Name of the stat we're representing.
 * @param {Number} [max=100] Maximum value of the stat.
 * @param {Number} base The default stat.
 * @param {Number} added Points added through perks.
 * @param {Number} removed Points removed through perks.
 * @public
 */
export default function Bar({ name, base, added, removed, max = 100 }) {
  return (
    <div className={ styles.statbar }>
      <span className={ styles.name }>{ name }</span>
      <div className={ styles.bars } style={{ width: `${max}%` }}>
        <div className={`${styles.bar} ${styles.base}`} style={{ width: `${base}%` }} />

        { added && <div className={`${styles.bar} ${styles.added}`} style={{ width: `${added}%`, left: `${base}%` }} /> }
        { removed && <div className={`${styles.bar} ${styles.removed}`} style={{ width: `${removed}%`, left: `${base - removed}%` }} /> }
      </div>
    </div>
  );
}

exporter({ Bar: React.memo(Bar) });
