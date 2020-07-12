import React from "react";
import PropTypes from "prop-types";

function Filter({ onChange }) {
  return (
    <div>
      filter shown with{" "}
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
