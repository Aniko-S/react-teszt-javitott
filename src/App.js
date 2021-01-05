import React, { useState } from "react";
import Input from "./Input";
import ItemList from "./ItemList";
import "./style.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const addNewItem = text => {
    setId(id => id + 1);
    setItems(items => [{ id, text, ready: false }, ...items]);
    setText("");
  };

  const deleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const onKeyPress = e => {
    if (e.charCode === 13) {
      addNewItem(text);
    }
  };

  const refresh = () => {
    setItems(items => [...items]);
  };

  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="row">
        <div className="col-11">
          <Input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyPress={onKeyPress}
          />
        </div>
        <div className="col-1">
          <button onClick={() => addNewItem(text)}>Hozzáadás</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <ItemList items={items} deleteItem={deleteItem} refresh={refresh} />
        </div>
      </div>
    </div>
  );
}
