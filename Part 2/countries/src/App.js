import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import Countries from "./components/Countries";
import Result from "./components/Result";

function App() {
  const [countries, setcountries] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  let countriesToShow = countries;
  let result = null;

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setcountries(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  countriesToShow = countries.filter((country) => {
    return country.name.toUpperCase().includes(search.toUpperCase());
  });

  result = countries.filter((item) => {
    return item.name.toUpperCase().includes(country.toUpperCase());
  });

  return (
    <div>
      <h1>Search For Country</h1>
      <FilterCountries search={search} searchhandler={handleSearchChange} />
      <h1>Results</h1>
      <Countries countries={countriesToShow} resulthandler={setCountry} />
      {country ? <Result country={result} /> : null}
    </div>
  );
}

export default App;
