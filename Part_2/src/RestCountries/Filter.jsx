import React from "react";
import PropTypes from "prop-types";

function Filter({ onChange, value }) {
  return (
    <div>
      filter shown with{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
