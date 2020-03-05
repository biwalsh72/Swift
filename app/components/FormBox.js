// @flow
import React, { Component } from 'react';
import styles from './FormBox.scss';

type Props = {};

export default class FormBox extends Component<Props> {
  props: Props;

  onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      // e.preventDefault();
      this.state.value = '';
    }
  };

  render() {
    return (
      <div className={styles.formBoxWrapper} data-tid="form-wrapper">
        <textarea
          type="text"
          className={styles.messageInput}
          data-tid="message-input"
          placeholder="Type here..."
          onKeyDown={this.onEnterPress}
        />
      </div>
    );
  }
}
