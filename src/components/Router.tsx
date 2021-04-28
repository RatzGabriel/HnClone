import React from "react";
import { Router, Route, Switch } from "react-router";
import App from "../App";
import About from "../elements/About";
import { createBrowserHistory } from "history";
import Settings from "../elements/Settings";

const history = createBrowserHistory();

const RouterClass: React.FC<any> = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/setting" component={Settings} />
            <Route exact path="/" component={App} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default RouterClass;
