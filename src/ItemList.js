import React from "react";
import OneItem from "./OneItem";

function ItemList({ items, deleteItem, refresh }) {
  return (
    <div>
      {items
        .sort((i1, i2) => {
          if (i1.ready && !i2.ready) return -1;
          if (i2.ready && !i1.ready) return 1;
          return 0;
        })
        .map(item => (
          <OneItem
            key={item.id}
            item={item}
            onClick={() => deleteItem(item.id)}
            refresh={refresh}
          />
        ))}
    </div>
  );
}

export default ItemList;
