// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Messages.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h4>Messages</h4>
        <div
          className={[styles.chatboxWrapper, styles.left].join(' ')}
          data-tid="friends-wrapper"
        >
          List of Chats
        </div>
        <div
          className={[styles.chatboxWrapper, styles.right].join(' ')}
          data-tid="chat-wrapper"
        >
          Chatbox
        </div>
      </div>
    );
  }
}
