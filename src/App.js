import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Home from "./components/Home.js/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
