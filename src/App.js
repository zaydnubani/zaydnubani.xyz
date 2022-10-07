import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing.js';
import Music from "./pages/Music";
import Work from "./pages/Experience";
import Mailer from './pages/components/Mailer'

function App() {

  return (
    
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/experience">
        <Work/>
      </Route>
      <Route exact path="/about">

      </Route>
      <Route exact path="/music">
        <Music/>
      </Route>
      <Route exact path="/contact">
        <Mailer/>
      </Route>
      <Router exact path='/music/callback'>

      </Router>
    </Router>
        
  );
}

export default App;
