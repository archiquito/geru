import React from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

const Routes = () => (
  <HashRouter>
    <div>
      <Route path="#/todos" component={Todo} />
      <Route path="#/about" component={About} />
      <Redirect from="*" to="/todos" />
    </div>
  </HashRouter>
);

Routes.displayName = "Routes";

export default Routes;
