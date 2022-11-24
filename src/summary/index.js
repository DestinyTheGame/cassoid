import styles from './summary.module.css';
import { Perks, Mod, Masterwork } from 'red/pure';
import exporter from 'red/export';
import React from 'react';

/**
 * Summary of the weapon selection
 *
 * @param {[type]} perks [description]
 * @param {[type]} mod [description]
 * @constructor
 */
export default function Summary({ perks, mod, masterwork, frame, size=42 }) {
  return (
    <footer className={ styles.summary } style={{ '--size': `${size}px` }}>
      <img className={ styles.frame } src={ frame.src } loading="lazy" alt={ frame.description } />
      <Perks direction='row' name='summary' items={ perks } size={ size } />
      { mod && <Mod name={ mod } size={ size } /> }
      { masterwork && <Masterwork name={ masterwork } size={ size } /> }
    </footer>
  );
}

exporter({ Summary: React.memo(Summary) });
