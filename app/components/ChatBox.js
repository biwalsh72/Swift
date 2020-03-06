// @flow
import React, { Component } from 'react';
import styles from './ChatBox.scss';

type Props = {};

export default class ChatBox extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.messagesContainer} data-tid="messages-container" />
    );
  }
}
