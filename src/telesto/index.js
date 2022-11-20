import styles from './telesto.module.css';
import postmaster from './postmaster.png';
import exporter from 'red/export';
import React from 'react';

/**
 * Shit went wrong, blame telesto.
 *
 * @param {String} [title="TELESTO"] What got borked
 * @param {String} [reason="TELESTO"] Why did it got borked.
 * @public
 */
function Telesto({ title = 'TELESTO', reason = 'TELESTO' }) {
  return (
    <section className={ styles.telesto }>
      <div className={ styles.postmaster }>
        <img src={ postmaster } alt="Photo of the postmaster droid" className={ styles.droid } />
        <div className={ styles.content }>
          <h1 className={ styles.title }>{ title }</h1>
          <p className={ styles.reason }>{ reason }</p>
        </div>
      </div>
    </section>
  );
}

exporter({ Telesto: React.memo(Telesto) });
