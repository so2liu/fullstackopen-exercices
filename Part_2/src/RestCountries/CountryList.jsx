import React from "react";
import PropTypes from "prop-types";

function CountryList({ countries, showDetail }) {
  return (
    <>
      {countries.length <= 10 ? (
        <div>
          {countries.map((c) => (
            <li key={c.name}>
              {c.name}{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showDetail(c.name);
                }}
              >
                Show
              </button>{" "}
            </li>
          ))}
        </div>
      ) : (
        "Too many countries"
      )}
    </>
  );
}

CountryList.propTypes = {
  countries: PropTypes.array,
  showDetail: PropTypes.func,
};

export default CountryList;
