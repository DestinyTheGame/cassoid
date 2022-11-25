import { Page, Slots, Weapon, Masterwork, Mod, Wizard, Weapon } from 'red/pure';
import styles from './welcome.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * Masterwork the weapon.
 *
 * @param {Object} items List of options.
 * @returns {Slots}
 * @public
 */
function Masterworking({ items }) {
  return <Slots Slot={ Masterwork } title='Weapon Masterwork' items={ items } />
}

/**
 * Apply a weapon to the weapon.
 *
 * @param {Object} items List of options.
 * @returns {Slots}
 * @public
 */
function Mods({ items }) {
  return <Slots Slot={ Mod } title='Weapon Mods' items={ items } />
}

/**
 * The default UI elements of any page on our site.
 *
 * @public
 */
export default function Smith() {
  return (
    <Page>
      <section className={ styles.smithing }>
        <Weapon />
        <Wizard />

        <Mods />
        <Masterworking />
      </section>
    </Page>
  )
}

exporter({ Smith: Smith });
