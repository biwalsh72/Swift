// @flow
import React, { Component } from 'react';
import styles from './ChatBox.scss';

type Props = {};

// Parts of ChatBox:
// 1. Input Box
// 2. Message Body
// 3. Message List

export default class ChatBox extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.ChatBox} data-tid="main-chatbox">
        ChatBox
      </div>
    );
  }
}
