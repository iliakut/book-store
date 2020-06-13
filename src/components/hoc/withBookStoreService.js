import React from "react";
import BookStoreServiceConsumer from "./../bookStoreServiceContext/bookStoreServiceContext"

const withBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (bookStoreService) => {
            return (
              <Wrapped {...props} bookStoreService={bookStoreService}/>
            )
          }
        }
      </BookStoreServiceConsumer>
    );
  }
};

export default withBookStoreService;
