import { Icon, Summary, Stats } from 'red/pure';
import styles from './weapon.module.css';
import exporter from 'red/export';
import React from 'react';

/**
 * A weapon that we're currently crafting.
 *
 * @param {String} name Name of the weapon.
 * @param {String} type Archtype of the weapon.
 * @param {String} src Backsplash image location
 * @param {String} element Elemental affinity image location.
 * @param {Object} icon Icongraphy.
 * @param {String} icon.src Location of the icon.
 * @param {String} icon.watermark Seasonal indicator.
 * @param {Object} summary Perk selection summary.
 * @param {Stats} stats Weapon stats and selected bonus.
 * @public
 */
function Weapon({ name, type, icon, src, element, summary, stats }) {
  return (
    <section className={ styles.weapon } style={{
      '--bg': `url(${src})`,
      '--element': `url(${element})`
    }}>
      <header className={ styles.header }>
        <Icon src={ icon.src } watermark={ icon.watermark }  />

        <hgroup className={ styles.details }>
          <h1 className={ styles.name }>{ name }</h1>
          <h5 className={ styles.type }>{ type }</h5>
        </hgroup>
      </header>

      <div className={ styles.content }>
        <Stats { ...stats } />
        <Summary { ...summary } size={ 42 } />
      </div>
    </section>
  );
}

exporter({ Weapon: React.memo(Weapon) });
