// @flow
import React, { Component } from 'react';
import Messages from '../components/Messages';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Messages />;
  }
}