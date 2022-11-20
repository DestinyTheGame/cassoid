import styles from './plop.module.css';
import exporter from 'red/export';
import React from 'react';

export default function Plop({ children }) {
  const content = React.Children.toArray(children);
  const action = content.shift();

  return (
    <div className={ styles.plop }>
      { action }

      <div className={ styles.plopbox } role="dialog">
        { content }
      </div>
    </div>
  )
}

export function PlopHeader({ title, subtitle }) {
  return (
    <header className={ styles.plopheader }>
      <h1 className={ styles.title }>{ title }</h1>
      { subtitle && <h5 className={ styles.subtitle }>{ subtitle }</h5> }
    </header>
  )
}

exporter({
  Plop: React.memo(Plop),
  PlopHeader: React.memo(PlopHeader)
});
