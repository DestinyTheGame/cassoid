import { Perks, Mod, Masterwork } from 'red/pure';
import styles from './summary.module.css';
import exporter from 'red/export';
import React from 'react';

export default function Summary({ perks, mod }) {
  return (
    <div className={ styles.summary }>
      <Perks direction={ row } name='summary' perks={ perks } />

      { mod && <Mod name={ mod } /> }
      { masterwork && <Masterwork name={ masterwork } /> }
    </div>
  )
}

exporter({ Summary: React.memo(Summary) });
