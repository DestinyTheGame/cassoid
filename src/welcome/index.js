import styles from './welcome.module.css';
import exporter from 'red/export';
import { Page } from 'red/pure';
import React from 'react';

/**
 * The default UI elements of any page on our site.
 *
 * @public
 */
export default function Welcome() {
  return (
    <Page>
      Welcome to cassoid. Text here.
    </Page>
  )
}

exporter({ Welcome: React.memo(Welcome) });
