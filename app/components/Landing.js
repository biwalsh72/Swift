import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Landing.scss';
import logo from '../../resources/swift.svg';
import routes from '../constants/routes.json';

type Props = {};

export default class Landing extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.centerContainer} data-tid="center-container">
          <img
            className={[styles.imgCenter, styles.noselect].join(' ')}
            src={logo}
            alt="swift-logo"
          />
          <div>
            <h3 className={styles.txt}>Welcome to Swift</h3>
          </div>
          <div className={styles.buttonContainer} data-tid="button-container">
            <Link to={routes.LOGIN}>
              <Button
                type="submit"
                className={styles.Login}
                data-tid="login-action"
              >
                <div>Login</div>
              </Button>
            </Link>
          </div>
          <div className={styles.buttonContainer} data-tid="button-container">
            <Link to={routes.REGISTER}>
              <Button
                type="submit"
                className={styles.Login}
                data-tid="login-action"
              >
                <div>Register</div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
