import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
import Login from "./components/pages/accounts/Login";
import Register from "./components/pages/accounts/Register";
import Detail from "./components/pages/details";
import Cart from "./components/pages/cart";
import Checkout from "./components/pages/checkout";
import Orders from "./components/pages/orders";
import OrdersDetails from "./components/pages/ordersDetails";
import Admin from "./components/pages/admin";
import WithAuth from "./WithAuth";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/product/:wineName/:id" component={Detail} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/purchase" component={Orders} />
      <Route path="/orders-details/:id" component={OrdersDetails} />
      <Route path="/admin" component={() => WithAuth(Admin)} />
    </Switch>
  );
}
