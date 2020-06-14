import React from "react";
import {connect} from "react-redux";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  return (
    <div>
      {
        items?.map((item, index) => {
          const {id, name, count, total} = item;
          return (
            <div key={id}>
              <span>{index + 1} </span>
              <span>name: {name} </span>
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

const mapDispatchToProps = () => {
  return {
    onIncrease: () => console.log(123),
    onDecrease: () => console.log(123),
    onDelete: () => console.log(123)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
