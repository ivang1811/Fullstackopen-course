import React from "react";

const ListElement = ({ country, resulthandler }) => {
  const handleCountryClick = (item) => {
    resulthandler(item);
  };
  return (
    <div>
      <li key={country.name}>
        {country.name}
        <button onClick={() => resulthandler(country.name)}>Show</button>
      </li>
    </div>
  );
};

export default ListElement;
