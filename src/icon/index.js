import styles from './icon.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * Icon component that renders the icon of a weapon, with an watermark option
 * that doesn't interfer with copy and pasting images.
 *
 * @param {String} src The location of the icon.
 * @param {String} watermark Seasonal introduction indicator.
 * @param {String} description Description of the icon that is rendered.
 * @param {Number} [size=42] The size of the icon.
 * @public
 */
export default function Icon({ src, watermark, description, size=42 }) {
  return (
    <div className={ styles.icon } style={{ '--watermark': `url(${watermark})`, '--size': `${size}px` }}>
      <img src={ src } className={ styles.image } loading="lazy" alt={ description } />
    </div>
  );
};

exporter({ Icon: React.memo(Icon) });
