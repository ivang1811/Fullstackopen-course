import React from "react";
import ListElement from "./ListElement";
import Result from "./Result";

const Countries = ({ countries, resulthandler }) => {
  if (countries.length > 10) {
    return <p>Too many matches, Specift another filter</p>;
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <ListElement
            key={country.name}
            country={country}
            resulthandler={resulthandler}
          />
        ))}
      </ul>
    );
  } else if (countries.length === 1) {
    return <Result country={countries} />;
  } else {
    return null;
  }
};

export default Countries;
