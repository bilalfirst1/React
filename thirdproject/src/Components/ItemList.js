import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) =>
         (
          <li key={index}>{item}</li>
        )
        )
        }
      </ul>
    </div>
  );
};

export default ItemList;