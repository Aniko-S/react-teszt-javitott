import React, { useState } from "react";

function OneItem({ item, onClick, refresh }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>
        <input
          type="checkbox"
          onChange={() => {
            item.ready = !item.ready;
            refresh();
          }}
        />
        <span className="text">{item.text}</span>
      </span>
      {hover && <button onClick={onClick}>Törlés</button>}
    </div>
  );
}

export default OneItem;
