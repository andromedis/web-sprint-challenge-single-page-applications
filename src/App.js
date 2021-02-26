import React, { useState } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  const [orders, setOrders] = useState([]);

  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        console.log(res)
        setOrders([res.data, ...orders])
      })
      .catch(err => {
        console.log(err);
      })
  }

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
        <PizzaForm postOrder={postOrder}/>
      </Route>
    </div>
  );
};
export default App;
