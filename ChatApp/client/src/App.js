import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/chat" component={Chat}/>
      <Route exact path="/" component={Join}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
