import React from "react";
import Languages from "./Languages";

const Result = ({ country }) => {
  let countryData = country[0];
  console.log(countryData);
  return (
    <div>
      <h1>{countryData.name}</h1>
      <p>Capital : {countryData.capital}</p>
      <p>Population : {countryData.population}</p>
      <h1>Languages</h1>
      <Languages languages={countryData.languages} />
      <img src={countryData.flag} alt="country flag"></img>
    </div>
  );
};

export default Result;
