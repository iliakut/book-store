import React from "react";
import {connect} from "react-redux";
import {allBookRemoveFromCart, bookAddToCart, bookRemoveFromCart} from "../../actions";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  return (
    <div>
      {
        items?.map((item, index) => {
          const {id, title, count, total} = item;
          return (
            <div key={id}>
              <span>{index + 1} </span>
              <span>name: {title} </span>
              <span>count: {count} </span>
              <span>total: {total} </span>
              <button onClick={() => onDecrease(id)}>dec</button>
              <button onClick={() => onIncrease(id)}>add</button>
              <button onClick={() => onDelete(id)}>delete</button>
            </div>
          )
        })
      }
    </div>
  );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};

const mapDispatchToProps = {
    onIncrease: bookAddToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBookRemoveFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
