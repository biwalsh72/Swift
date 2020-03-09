// @flow
import React, { Component } from 'react';
import styles from './ConversationsHeader.scss';

type Props = {};

export default class ConversationsHeader extends Component<Props> {
  props: Props;

  render() {
    return (
      <div
        className={styles.ConversationsHeader}
        data-tid="conversations-header"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M2.8 11a6 6 0 0 1-.6-1.5H0v-3h2.2c.1-.6.3-1 .6-1.5L1.3 3.4l2.1-2.1L5 2.8a6 6 0 0 1 1.5-.6V0h3v2.2c.6.1 1 .3 1.5.6l1.6-1.5 2.1 2.1L13.2 5c.3.4.5 1 .6 1.5H16v3h-2.2a6 6 0 0 1-.6 1.5l1.5 1.6-2.1 2.1-1.6-1.5a6 6 0 0 1-1.5.6V16h-3v-2.2a6 6 0 0 1-1.5-.6l-1.6 1.5-2.1-2.1L2.8 11zM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </svg>
        <h4>Username</h4>
      </div>
    );
  }
}