/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Login.scss';
import logo from '../../resources/swift.svg';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h3>
          <img className={styles.imgCenter} src={logo} alt="swift-logo" />
          Login to Swift
        </h3>
        <div className={styles.loginForm} data-tid="login-form">
          <form method="post">
            <label className={styles.loginInfoUserName} data-tid="username">
              Username
              <div className="username-wrapper">
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className={[styles.Input, styles.effect7].join(' ')}
                />
              </div>
            </label>
            <label className={styles.loginInfoPassword} data-tid="password">
              Password
              <div className="password-wrapper">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={styles.Input}
                />
              </div>
            </label>
            <button
              type="submit"
              className={styles.logmeIn}
              data-tid="login-action"
            >
              <div>Login</div>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
