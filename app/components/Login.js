/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import { Link } from 'react-router-dom';
import styles from './Login.scss';
import logo from '../../resources/swift.svg';
import routes from '../constants/routes.json';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h3 className={styles.noselect}>
          <img
            className={[styles.imgCenter, styles.noselect].join(' ')}
            src={logo}
            alt="swift-logo"
          />
          Login to Swift
        </h3>
        <div className={styles.loginForm} data-tid="login-form">
          <form method="post">
            <label
              className={[styles.loginInfoUserName, styles.noselect].join(' ')}
              data-tid="username"
            >
              Username
              <div className="username-wrapper">
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className={styles.Input}
                />
              </div>
            </label>
            <label
              className={[styles.loginInfoPassword, styles.noselect].join(' ')}
              data-tid="password"
            >
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
            <Link to={routes.HOME}>
              <Button
                type="submit"
                className={styles.logmeIn}
                data-tid="login-action"
              >
                <div>Login</div>
              </Button>
            </Link>
            <a className={styles.signup}>Don&apos;t have an account yet?</a>
          </form>
        </div>
      </div>
    );
  }
}
