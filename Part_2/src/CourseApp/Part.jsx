import React from "react";
import PropTypes from "prop-types";

function Part(props) {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
}

Part.propTypes = {
  name: PropTypes.string,
  exercises: PropTypes.number,
  id: PropTypes.number,
};

export default Part;
