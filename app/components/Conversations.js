// @flow
import React, { Component } from 'react';
import styles from './Conversations.scss';

type Props = {};

export default class Conversations extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="main-conversations">
        Conversations
      </div>
    );
  }
}
