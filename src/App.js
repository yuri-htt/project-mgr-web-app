import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/NavBar'
import Dashboard from './components/dashboard/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
