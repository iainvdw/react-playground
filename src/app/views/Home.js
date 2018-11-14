import React from 'react';
import { connect } from 'react-redux';

import actions from '../store/Auth';

function Home({ auth, login, logout }) {
  function handleLogin() {
    login({ user: 'Iain' });
  }

  function handleLogout() {
    logout();
  }

  return (
    <>
      <h1>This is home</h1>
      {auth.loading ? (
        <p>Loading</p>
      ) : (
        <p>{auth.user ? `Logged in! Welcome ${auth.user.name}` : 'Login first please!'}</p>
      )}
      {auth.error ? <p>{auth.error}</p> : null}
      {auth.user ? (
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

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(actions.login(user)),
  logout: () => dispatch(actions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
