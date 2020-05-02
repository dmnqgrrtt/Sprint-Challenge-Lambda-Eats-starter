import React from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path='/pizza'>
          <OrderPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
