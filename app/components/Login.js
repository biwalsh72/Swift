/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import styles from './Login.scss';
import logo from '../../resources/swift.svg';
// import routes from '../constants/routes.json';
// import { userActions } from '../actions/user';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(`${username} ${password}`);

    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    const { username, password } = this.state;
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
          <form method="post" onSubmit={this.handleSubmit}>
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
                  value={username}
                  onChange={this.handleChange}
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
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </label>
            <Button
              type="submit"
              className={styles.logmeIn}
              data-tid="login-action"
            >
              <div>Login</div>
            </Button>
            <a className={styles.signup}>Don&apos;t have an account yet?</a>
          </form>
        </div>
      </div>
    );
  }
}
