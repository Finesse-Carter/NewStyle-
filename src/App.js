import React from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './components/Theme'
import Login from './components/Login'
import LayOut from './components/LayOut';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
<ThemeProvider theme={theme}>
    <Router>
    <Switch>
    <Route exact path="/">
    <LayOut/>
          </Route>
          <Route exact path="/login">
    <Login/>
          </Route>
        </Switch>
    </Router>
</ThemeProvider>
      
    </div>
  );
}

export default App;
