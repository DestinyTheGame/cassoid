import styles from './header.module.css';
import { Link } from "react-router-dom";
import exporter from 'red/export';
import { nope } from '../const';
import React, { useRef } from 'react';

/**
 * Renders the header of the page.
 *
 * @param {Function} [onSearch=nope }] Function that is called when a search is made.
 * @public
 */
export default function Header({ onSearch=nope }) {
  const ref = useRef();

  return (
    <header className={ styles.header }>
      <form className={ styles.search }>
        <input name="search" placeholder="Search ..." autoComplete="off" onChange={ (e) => onSearch(e.target.value) } ref={ ref }  />
        <button type="button" onClick={ () => onSearch(ref.current.value = '') }>X</button>
      </form>

      <Link to="/" className={ styles.logo }>Cassoid</Link>

      <ul className={ styles.options }>
        <li>
          <a className={ styles.link } href="https://github.com/DestinyTheGame/cassoid#readme">Contribute</a>
        </li>
      </ul>
    </header>
  );
}

exporter({ Header: React.memo(Header) });
