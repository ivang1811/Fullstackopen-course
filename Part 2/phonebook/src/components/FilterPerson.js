import React from "react";

const FilterPerson = ({ search, handler }) => {
  return (
    <div>
      Search: <input value={search} onChange={handler} />
    </div>
  );
};

export default FilterPerson;
