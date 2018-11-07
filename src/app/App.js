import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './views/Home';
import About from './views/About';

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="nl" />
        <meta charSet="utf-8" />
        <title>My Title</title>
      </Helmet>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}
