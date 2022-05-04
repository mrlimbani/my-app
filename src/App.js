import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard1} />
          <Route exact path="/1" component={Dashboard2} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
