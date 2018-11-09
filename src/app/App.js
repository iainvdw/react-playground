import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './views/Home';
import About from './views/About';
import Foo from './views/Foo';

const App = () => (
  <>
    <Helmet>
      <html lang="nl" />
      <meta charSet="utf-8" />
      <title>My Title</title>
    </Helmet>

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/foo">Foo</Link>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/foo" component={Foo} />
    </Switch>
  </>
);

export default App;
