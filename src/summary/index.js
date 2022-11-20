import styles from './summary.module.css';
import React, { useMemo } from 'react';
import exporter from 'red/export';
import { Perks, Mod } from 'red/pure';

export default function Summary({ perks, mod }) {
  return (
    <div className={ styles.summary }>
      <Perks direction={ row } name='summary' />

      { mod && <Mod name={ mod } /> }
      { masterwork && <Masterwork name={ masterwork } /> }
    </div>
  )
}

exporter({ Summary: React.memo(Summary) });
