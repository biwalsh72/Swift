// @flow
import React, { Component } from 'react';
import styles from './FormBox.scss';

type Props = {};

export default class FormBox extends Component<Props> {
  props: Props;

  render() {
    return (
      <input
        className={styles.container}
        type="text"
        placeholder="Type here..."
      />
    );
  }
}
