import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All'); //false for when nothing is selected in dropdown
  
  function handleSelect(e) {
    setSelectedCategory(e.target.value) // produce, dairy, dessert
    
      
  }

   items.filter((item) => item.category === selectedCategory ? <li>{item}</li> : null ) // if item's category doesn't equal value, remove those items
  const food = (selectedCategory === "All") ? items : items.filter((item) => item.category === selectedCategory)
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {food.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
