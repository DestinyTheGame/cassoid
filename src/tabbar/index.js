import styles from './tabbar.module.css';
import exporter from 'red/export';
import React, { useMemo } from 'react';

/**
 * A simple tab bar.
 *
 * @param {Array} tabs Tabs that should be rendered
 * @param {Function} onClick onClick handler.
 * @public
 */
export function Tabbar({ tabs, ...props }) {
  const items = useMemo(function memo() {
    return tabs.map(function map(tab) {
      /**
       * Click handler for each tab.
       *
       * @param {Event} e Browser event, to prevent default action.
       * @private
       */
      function onClick(e) {
        e.preventDefault();

        if (props.onClick) props.onClick(e, tab);
      }

      return (
        <li className={[styles.item, tab.active && styles.active].filter(Boolean).join(' ')} key={ tab.name }>
          <a className={ styles.tab } href="#" onClick={ onClick }>{ tab.name }</a>
        </li>
      );
    });
  }, [ tabs ]);

  return (
    <ul className={ styles.tabbar }>
      { items }
    </ul>
  )
}

exporter({ Tabbar: React.memo(Tabbar) });
