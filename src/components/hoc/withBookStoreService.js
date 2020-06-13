import React from "react";
import {BookStoreServiceConsumer} from "./../bookStoreServiceContext/bookStoreServiceContext"

const withBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (value) => {
            return (
              <Wrapped {...props} bookStoreService={value}/>
            )
          }
        }
      </BookStoreServiceConsumer>
    );
  }
};

export default withBookStoreService;
