import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSeachValue }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSeachValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
