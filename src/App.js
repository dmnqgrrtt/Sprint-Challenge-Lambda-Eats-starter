import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';

const App = () => {

  const [orders, setOrders] = useState([]);
  console.log("Orders", orders)

  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Switch>
        <Route path='/pizza'>
          <OrderPage orders={orders} setOrders={setOrders} />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
