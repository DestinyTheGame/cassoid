import styles from './welcome.module.css';
import exporter from 'red/export';
import { Page, Weapon, Masterworking, Mods } from 'red/pure';
import React from 'react';

/**
 * The default UI elements of any page on our site.
 *
 * @public
 */
export default function Smith() {
  return (
    <Page>
      <section className={ styles.smithing}>
        <Weapon />
        <Wizard />
        <Mods />
        <Masterworking />
      </section>
    </Page>
  )
}

exporter({ Smith: Smith });
