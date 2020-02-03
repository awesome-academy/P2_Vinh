import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/home';
import Login from './components/pages/accounts/Login';
import Register from './components/pages/accounts/Register';
import Detail from './components/pages/details';

export default function Routes() {
	return (
	    <Switch>
	      <Route path='/' component={Home} exact />
	      <Route path='/login' component={Login} />
	      <Route path='/register' component={Register} />
	      <Route path='/:wineName/:id' component={Detail} />
	    </Switch>
	)
}
