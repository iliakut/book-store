import React from "react";

const BookListItem = ({book, onAddToCart}) => {
  const {title, author} = book;

  return (
    <React.Fragment>
      <span>{title}</span>
      <span>{author}</span>
      <button onClick={onAddToCart}>add to cart</button>
    </React.Fragment>
  );
};

export default BookListItem;
