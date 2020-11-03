import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navbar/index";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import NoMatch from "./components/pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

