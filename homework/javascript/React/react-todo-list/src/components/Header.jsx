import React from "react";

const Header = ({ filterKindEnum, setFilterKind }) => {
  const headerStyle = {
    borderBottom: "solid 1px gray",
  };

  const onChangeSelectBox = (e) => setFilterKind(e.target.value);

  return (
    <div style={headerStyle}>
      <h1>To Do List</h1>
      <select onChange={onChangeSelectBox}>
        {Object.values(filterKindEnum).map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Header;
