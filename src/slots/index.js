import React, { useState, useMemo, useCallback } from 'react';
import styles from './slots.module.css';
import exporter from 'red/export';
import { Tabbar } from 'red/pure';
import { nope } from '../const';

export function Slots({ Slot, title, name, items, active, onChange=nope, size=42 }) {
  const [panel, setPanel] = useState(0);

  const tabs = useMemo(function memo() {
    return Object.keys(items).map(function (key, index) {
      return {
        active: panel === index,
        name: key
      };
    });
  }, [ items, panel ]);

  const slots = useMemo(function () {
    const slotted = items[Object.keys(items)[panel]];

    return slotted.map((key) => (
      <label key={ key }>
        <input
          onChange={ (e) => onChange(e, { name, item: key }) }
          checked={ active === key }
          className={ styles.input }
          value={ name }
          name={name}
          type="radio"
        />
        <Slot name={ key } size={ size } />
      </label>
    ));
  }, [panel, items]);

  const onClick = useCallback(function clicked(_, tab) {
    setPanel(tabs.indexOf(tab));
  }, [ tabs ]);

  return (
    <div className={ styles.slots }>
      <h2 className={ styles.header }>{ title }</h2>

      { tabs.length >= 2 && <Tabbar tabs={ tabs } onClick={ onClick } /> }
      <fieldset className={ styles.selection }>{ slots }</fieldset>
    </div>
  );
}

exporter({ Slots });
