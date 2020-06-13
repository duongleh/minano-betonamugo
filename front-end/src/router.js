import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from 'views/Home';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';
import Course from 'views/Courses';
import Page404 from 'views/Page404';

function Router() {
  const LoginStatus = useSelector((state) => state.LoginStatus);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />

      {LoginStatus.isLogin ? (
        <Switch>
          <Route path='/course/:id' component={Course} />
        </Switch>
      ) : (
        <></>
      )}
      <Route path='*' exact={true} component={Page404} />
    </Switch>
  );
}

export default Router;
