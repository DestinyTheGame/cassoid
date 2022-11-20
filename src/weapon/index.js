const { useSelectiveState } = require('red/state/hook');
const styles = require('./weapon.module.css');
const { state } = require('red/state');
const { PerkWizard } = require('red');
const React = require('react');

function Weapon({ name, perks }) {
  const text = useSelectiveState(state.translations);

  return (
    <section className={ styles.weapon }>
      <header>
        <h1 className={ styles.name }>{ name }</h1>
        <h5 className={ styles.type }>{ text[type] }</h5>

        <figure className={ styles.element }>
        </figure>
      </header>

      <PerkWizard perks={ perks } />
    </section>
  );
}

//
// Expose the component.
//
module.exports = require('red/export')({
  Stats: React.memo(Stats)
});
