// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Home.scss';

import FormBox from './FormBox';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.leftsideBar} data-tid="left-sidebar">
          S
        </div>
        <div
          className={styles.conversationsContainer}
          data-tid="conversations-container"
        >
          <h4>Conversations</h4>
        </div>
        <div
          className={styles.rightPaneContainer}
          data-tid="right-pane-container"
        >
          <div className={styles.header} data-tid="chatbox-header">
            <div className={styles.receiver} data-tid="message-reciever">
              Name of receiver
            </div>
          </div>
          <div className={styles.chatBoxContainer} data-tid="chatbox-container">
            <FormBox />
          </div>
        </div>
      </div>
    );
  }
}
