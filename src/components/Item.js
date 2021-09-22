import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(true) // true for add
  const itemClass = addItem ? "" : "in-cart"
  
  function handleCart(addItem) {
      setAddItem((addItem) => !addItem)
      
  }


  return (
    //make ternary conditional for class attribute
    <li className={itemClass}> 
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{addItem ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
