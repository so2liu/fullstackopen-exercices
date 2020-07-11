import React from "react";
import PropTypes from "prop-types";

function Statistics({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

Statistics.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
};

export default Statistics;
