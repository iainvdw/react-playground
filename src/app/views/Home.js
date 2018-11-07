import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
  return (
    <>
      <h1>This is home</h1>
      <p>{props.auth.user ? `Logged in! Welcome ${props.auth.user}` : 'Log in first please'}</p>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
