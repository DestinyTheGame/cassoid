import { mods, masterworks } from '../const.js';
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
export function Icon({ src, watermark, description, size=42 }) {
  return (
    <div className={ styles.icon } style={{ '--watermark': `url(${watermark})`, '--size': `${size}px` }}>
      <img src={ src } className={ styles.image } loading="lazy" alt={ description } />
    </div>
  );
};

/**
 * Squarecon renders a square icon. Used as base class for various of
 * icongraphy.
 *
 * @param {String} src The icon to render.
 * @param {String} description Description of the icon.
 * @param {Number} size Size of the icon.
 * @public
 */
export function Squarecon({ src, description, size=42 }) {
  return (
    <div className={ styles.squarecon } style={{ '--size': `${size}px` }}>
      <img src={ src } className={ styles.image } loading="lazy" alt={ description } />
    </div>
  )
}

/**
 * Representation of a Mod icon.
 *
 * @param {String} name Name of the mod we want to render.
 * @param {Number} size Size of the icon.
 * @public
 */
export function Mod({ name, size }) {
  const mod = mods[name];

  return <Squarecon src={ mod.src } description={ mod.description } size={ size } />
}

/**
 * Representation of a masterwork icon.
 *
 * @param {String} name Name of the masterwork.
 * @param {Number} size Size of the icon.
 * @public
 */
export function Masterwork({ name, size }) {
  const mw = masterworks[name];

  return <Squarecon src={ mw.src } description={ mw.description } size={ size } />
}

exporter({
  Masterwork: React.memo(Masterwork),
  Squarecon: React.memo(Squarecon),
  Icon: React.memo(Icon),
  Mod: React.memo(Mod)
});
