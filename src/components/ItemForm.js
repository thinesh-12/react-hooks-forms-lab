import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemCategory, setItemCategory] = useState("Produce");
  const [newItemName, setNewItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setNewItemName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
