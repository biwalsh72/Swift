// @flow
import React, { Component } from 'react';
import styles from './FormBox.scss';

type Props = {};

export default class FormBox extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.formBoxWrapper} data-tid="form-wrapper">
        <textarea
          type="text"
          className={styles.messageInput}
          data-tid="message-input"
          placeholder="Type here..."
        />
      </div>
    );
  }
}
