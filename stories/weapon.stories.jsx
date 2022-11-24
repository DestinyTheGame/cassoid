import { stats, barrels, mags, firstPerks, secondPerks } from './data';
import { factory } from './utilitybook';
import { Weapon } from '../src';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Weapon',
  component: Weapon,
};

const example = factory(Weapon);

export const WeaponInspection = example({
  name: 'Main Ingredient',
  type: 'Fusion Rifle',

  src: 'https://www.bungie.net/common/destiny2_content/screenshots/253196586.jpg',
  element: 'https://www.bungie.net/common/destiny2_content/icons/DestinyDamageTypeDefinition_092d066688b879c807c3b460afdd61e6.png',
  icon: {
    src: 'https://www.bungie.net/common/destiny2_content/icons/34b5a87f1d8b531b0682bc3fdc222a6d.jpg',
    watermark: 'https://www.bungie.net/common/destiny2_content/icons/dd71a9a48c4303fd8546433d63e46cc7.png',
    description: 'Representation of the Main Ingredient gun model'
  },
  stats: {
    ...stats,

    selection: [
      ...barrels.slice(0, 1),
      ...mags.slice(0, 1),

      { stats: { stability: 10 }},
      { stats: { rd: 25 }}
    ]
  },
  summary: {
    perks: [
      ...barrels.slice(0, 1),
      ...mags.slice(0, 1),
      ...firstPerks.slice(0, 1),
      ...secondPerks.slice(0, 1)
    ],
    mod: 'minor',
    masterwork: 'stability',
    frame: {
      src: 'https://www.bungie.net/common/destiny2_content/icons/65fdde950b85bdd1e0383e1016a73661.png'
    }
  }
});
