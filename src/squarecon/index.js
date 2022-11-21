import styles from './squarecon.module.css';
import { mods } from '../const.js';
import exporter from 'red/export';
import React from 'react';

/**
 * Squarecon renders a square icon. Used as base class for various of
 * icongraphy.
 *
 * @param {String} src The icon to render.
 * @param {String} description Description of the icon.
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
 * @public
 */
export function Mod({ name }) {
  const mod = mods[name];

  return <Squarecon src={ mod.src } description={ mod.description } />
}

exporter({
  Squarecon: React.memo(Squarecon),
  Mod: React.memo(Mod)
});
