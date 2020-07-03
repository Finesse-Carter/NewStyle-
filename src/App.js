import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import ProFile from "./components/ProFile";
import SignUp from "./components/SignUp";
import theme from "./components/Theme";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile-page">
              <ProFile />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
