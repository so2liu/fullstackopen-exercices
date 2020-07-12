import React from "react";
import PropTypes from "prop-types";

function CountryDetail({ country }) {
  return (
    <div>
      <h3>{country.name}</h3>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <img src={country.flag} alt="flag" style={{ width: "200px" }} />
      <h4>
        languages:
        {country.languages.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </h4>
    </div>
  );
}

CountryDetail.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    capital: PropTypes.string,
    population: PropTypes.number,
    languages: PropTypes.array,
  }),
};

export default CountryDetail;
