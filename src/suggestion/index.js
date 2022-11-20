import styles from './suggestion.module.css';
import { Link } from "react-router-dom";
import React, { useMemo } from 'react';
import exporter from 'red/export';
import { Icon } from 'red/pure';
import slug from 'slug';

/**
 * Render a single suggestion for autosuggest.
 *
 * @param {String} name Name of the weapon.
 * @param {Number} season Season in which in the gun was introduced.
 * @param {String} src Source of the icon.
 * @param {String} watermark Source of the watermark.
 * @public
 */
export function Suggestion({ name, season, src, watermark }) {
  return (
    <Link to={`/s${season}/${slug(name)}`} className={ styles.suggestion }>
      <Icon src={ src } watermark={ watermark } />
      <span className={ styles.name }>{ name }</span>
    </Link>
  );
}

/**
 * List of suggestions based on a given search string
 *
 * @param {Array} items Array of Objects that we need to displlay.
 * @param {String} search String that should occure in the text somewhere.
 * @param {Number} [max=25] Maximum amount of items to display.
 * @param {String} [key='name'] Name of the key that holds the string in the object.
 * @public
 */
export function Suggestions({ items, search='', max=25, key='name' }) {
  const results = useMemo(function memo() {
    let matches = items;

    if (search && search.length) {
      const target = slug(search);
      
      matches = items.filter(function filter(item) {
        return slug(item[key]).includes(target);
      });
    }

    return matches.slice(0, max);
  }, [search, items, max]);

  return (
    <div className={ styles.suggestions }>
      { results.map((item) => <Suggestion { ...item } key={ item.src } />) }
    </div>
  )
}

exporter({
  Suggestion: React.memo(Suggestion),
  Suggestions
});
