import React from "react";

function Input({ value, onChange, onKeyPress }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}

export default Input;
