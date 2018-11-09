import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authUser, logoutUser } from '../store/actions/auth-actions';

function Home(props) {
  function handleLogin() {
    props.authUser({ user: 'Iain' });
  }

  function handleLogout() {
    props.logoutUser();
  }

  return (
    <>
      <h1>This is home</h1>
      {props.auth.loading ? (
        <p>Loading</p>
      ) : (
        <p>{props.auth.user ? `Logged in! Welcome ${props.auth.user}` : 'Login first please!'}</p>
      )}
      {props.auth.error ? <p>{props.auth.error}</p> : null}
      {props.auth.user ? (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({ authUser, logoutUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
