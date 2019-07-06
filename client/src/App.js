import React from 'react';
import './App.css';
import List from './components/List';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header>
        I'll want a header eventually
      </header> */}
      <Route exact path="/my_list" component={List} />
    </div>
  );
}

export default App;
