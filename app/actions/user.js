/* eslint-disable import/prefer-default-export */
/* eslint-disable promise/always-return */
import fetch from 'electron-main-fetch';
import { userConstants } from '../constants/user';

const login = (username, password) => {
  const loginRequest = user => {
    return { type: userConstants.LOGIN_REQUEST, user };
  };
  const loginSuccess = user => {
    return { type: userConstants.LOGIN_SUCCESS, user };
  };
  const loginFailure = error => {
    return { type: userConstants.LOGIN_FAILURE, error };
  };

  return dispatch => {
    dispatch(loginRequest({ username }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch('/', requestOptions)
      .then(response => response.json())
      .then(authObject => {
        if (authObject.err) {
          throw new Error(authObject.err.loginMessage);
        } else {
          dispatch(loginSuccess(authObject.authUser));
        }
      })
      .catch(error => {
        dispatch(loginFailure(error.message));
      });
  };
};

const logout = () => {
  fetch('/logout');
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout
};
