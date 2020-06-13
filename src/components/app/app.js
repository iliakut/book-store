import React from "react";
import withBookStoreService from "../hoc/withBookStoreService";

const App = ({bookStoreService}) => {
  console.log(bookStoreService.getBooks());
  return (
    <div>App</div>
  );
};

export default withBookStoreService()(App);
