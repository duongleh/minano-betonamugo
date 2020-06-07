import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'views/Home';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

function Router() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
    </Switch>
  );
}

export default Router;
