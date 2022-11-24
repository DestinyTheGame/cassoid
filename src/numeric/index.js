import styles from './numeric.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * Representation of a single statbar.
 *
 * @param {Number} base The default stat.
 * @param {Number} added Points added through perks.
 * @param {Number} removed Points removed through perks.
 * @public
 */
export default function Bar({ base, added, removed }) {
  let suffix = '';

  if (added) suffix = '▲';
  if (removed) suffix = '▼';

  return (
    <div className={ styles.bars } style={{ width: `${max}%` }}>
      <div className={`${styles.bar} ${styles.base}`} style={{ width: `${base}%` }} />
      { added && <div className={`${styles.bar} ${styles.added}`} style={{ width: `${added}%`, left: `${base}%` }} /> }
      { removed && <div className={`${styles.bar} ${styles.removed}`} style={{ width: `${removed}%`, left: `${base - removed}%` }} /> }
    </div>
  );
}

exporter({ Bar: React.memo(Bar) });
