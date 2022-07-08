import React from "react";

const Searchbar = ({ value, ...rest }) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type the name of the country"
          className="searchbar"
          value={value}
          {...rest}
        />
      </div>
    </>
  );
};

export default Searchbar;
