import React from "react";
import { Route, Redirect, HashRouter, Switch } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </Switch>
  </HashRouter>
);

Routes.displayName = "Routes";

export default Routes;
