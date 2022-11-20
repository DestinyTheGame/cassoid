import styles from './sidebar.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * Representation of a single statbar.
 *
 * @public
 */
export default function Sidebar() {
  return (
    <aside className={ styles.sidebar }>
    </aside>
  );
}

exporter({ Sidebar: React.memo(Sidebar) });
