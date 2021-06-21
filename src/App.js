import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Home from './pages/Home'

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
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
