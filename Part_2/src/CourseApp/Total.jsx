import React from "react";
import PropTypes from "prop-types";

function Total({ parts }) {
  return (
    <p>
      <b>total of {parts.reduce((pre, cur) => pre + cur.exercises, 0)}</b>
    </p>
  );
}

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
      id: PropTypes.number,
    })
  ),
};

export default Total;
