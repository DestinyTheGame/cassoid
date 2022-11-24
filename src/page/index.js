import React, { useCallback, useState } from 'react';
import { Suggestions, Header } from 'red/pure';
import styles from './page.module.css';
import exporter from 'red/export';

/**
 * The default UI elements of any page on our site.
 *
 * @public
 */
export default function Page({ children, items }) {
  const [search, searching] = useState('');
  const onSearch = useCallback(searching);

  const results = !search ? null : (
    <aside className={ styles.drawer }>
    { search && <Suggestions search={ search } items={ items } /> }
    </aside>
  );

  return (
    <div className={ styles.page }>
      <Header onSearch={ onSearch } />

      <main className={ styles.container }>
        { results }
        <div className={ styles.contents}>
          { children }
        </div>
      </main>
    </div>
  );
}

exporter({ Page: React.memo(Page) });
