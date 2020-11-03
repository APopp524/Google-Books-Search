import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import NoMatch from "./components/pages/NoMatch";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import Main from "./components/Main/index";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" Component={Search} />
            <Route exact path="/search" Component={Search} />
            <Route exact path="/saved" Component={Saved} />
            <Route exact path="/NoMatch" Component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;

