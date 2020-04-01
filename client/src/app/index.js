import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Set up React Router for potential scaling

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
