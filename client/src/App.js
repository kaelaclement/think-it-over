import React from 'react';
import './App.css';
import List from './components/List';
import { Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <header>
        I'll want a header eventually
      </header> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/my_list" component={List} />
      {/* <Route exact path="/:itemId" component={Item} /> */}
    </div>
  );
}

export default App;
