import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import Main from './Main';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <Main>
              <route.body />
            </Main>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
