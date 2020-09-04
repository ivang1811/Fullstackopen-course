import React from "react";

const FilterCountries = ({ search, searchhandler }) => {
  return (
    <div>
      Search: <input value={search} onChange={searchhandler} />
    </div>
  );
};

export default FilterCountries;
