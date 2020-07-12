import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../PhonebookApp/Filter";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import Weather from "./Weather";

const URL = "https://restcountries.eu/rest/v2/all";

export default function RestCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const [filter, setFilter] = useState("");
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  function onShowDetail(name) {
    setFilter(name);
  }

  return (
    <div>
      <h2>Country Infos</h2>
      <Filter value={filter} onChange={setFilter} />
      {filteredCountries.length > 1 && (
        <CountryList countries={filteredCountries} showDetail={onShowDetail} />
      )}
      {filteredCountries.length === 1 && (
        <CountryDetail country={filteredCountries[0]} />
      )}
      {filteredCountries.length === 1 && (
        <Weather name={filteredCountries[0].name} />
      )}
    </div>
  );
}
