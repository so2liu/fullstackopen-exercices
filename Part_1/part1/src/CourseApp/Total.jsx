import React from "react";
import PropTypes from "prop-types";

function Total(props) {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
}

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
    })
  ),
};

export default Total;
