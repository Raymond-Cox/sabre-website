import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./src/components/Nav";
import styled from "styled-components";
import "./index.css";
import Commands from "./src/screens/Commands";
import Setup from "./src/screens/Setup";
import Home from "./src/screens/Home";
class App extends Component {
  render() {
    return (
      <Router forceRefresh={false}>
        <Container>
          <Nav />
          <Switch>
            <Route path="/commands">
              <Commands />
            </Route>
            <Route path="/setup">
              <Setup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--alt);
`;
var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
