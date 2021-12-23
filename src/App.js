import {Switch, Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <route exact path='/Starred'>
      <Starred/>
      </route>
      <route>
        Page not found.
      </route>
    </Switch>
  );
}

export default App;
