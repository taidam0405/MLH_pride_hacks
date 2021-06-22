import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd2c63",
      // light: "", // light blue
      // dark: "", // dark blue color
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
