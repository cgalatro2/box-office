import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div>This the home page</div>
      </Route>

      <Route exact path="/starred">
        <div>This the starred page</div>
      </Route>

      <Route>404</Route>
    </Switch>
  );
}
