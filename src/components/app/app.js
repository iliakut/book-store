import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import HomePage from "../pages/homePage";
import CartPage from "../pages/cartPage";

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart/">Cart</Link>
      <Switch>
        <Route
          path="/"
          exact
          component={HomePage}
        >
        </Route>
        <Route
          path="/cart/"
          component={CartPage}
        >
        </Route>
      </Switch>
    </div>
  );
};

export default App;
