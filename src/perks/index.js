import styles from './perks.module.css';
import exporter from 'red/export';
import { Plop } from 'red/pure';
import { nope } from '../const';
import React from 'react';
import slug from 'slug';

/**
 * A list of perks to be selected.
 *
 * @param {String} name Name of the perks that are being selected
 * @param {Array} items List of items that can be selected.
 * @param {String} active The name of the item.
 * @param {Function} onChange Handler that is called on change.
 * @public
 */
export default function Perks({ direction = 'column', name, items, active, onChange = nope, size = 42 }) {
  const perks = items.map(function transform(item) {
    const value = slug(item.value);

    return (
      <input
        className={ `${styles.icon} ${item.enhanced ? styles.enhanced : ''}` }
        style={{ '--icon': `url(${item.icon})`, '--size': `${size}px` }}
        onChange={ (e) => onChange(e, { name, item }) }
        checked={ active === value }
        title={ item.value }
        value={ value }
        name={ name }
        key={ value }
        type="radio"
      />
    );
  });

  return (
    <fieldset className={ styles.selection } style={{ '--direction': direction }}>
      { perks }
    </fieldset>
  )
}

//
// Expose the component.
//
exporter({ Perks: React.memo(Perks) });
