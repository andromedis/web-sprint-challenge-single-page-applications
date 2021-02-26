import React from "react";
import { Route } from 'react-router-dom';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>Lambda Eats</h1>
      </header>
      {/* header */}
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <PizzaForm />
      </Route>
    </div>
  );
};
export default App;
