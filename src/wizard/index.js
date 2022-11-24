import React, { useState, useEffect, useCallback } from 'react';
import { useSelectiveState } from 'red/state/hook';
import styles from './wizard.module.css';
import exporter from 'red/export';
import { Perks } from 'red/pure';
import { state } from 'red/state';
import slug from 'slug';

/**
 * Perks wizard, select what ever you want.
 *
 * @param {Object} perks Object of items that can be selected.
 * @param {Function} [onChange] Callback when a modification has been made.
 * @param {[type]} props [description]
 * @public
 */
function Wizard({ perks, ...props })   {
  const [active, setActive] = useState({});

  useEffect(() => {
    setActive({})
  }, [perks]);

  const onChange = useCallback(function onChanges(e, { name, item }) {
    setActive({ ...active, [name]: slug(item.value) });

    if (props.onChange) props.onChange(e, { perks, name, item });
  }, [props.onChange, perks]);

  return (
    <section className={ styles.wizard }>
      <h2 className={ styles.header }>Weapon Perks</h2>

      <div className={ styles.selection }>
        {
          Object.entries(perks).map(([name, items]) => (
            <Perks name={name} items={items} key={ name } active={ active[name] } onChange={ onChange } />
          ))
        }
      </div>
    </section>
  )
}

exporter({ Wizard });
