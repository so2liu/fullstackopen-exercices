import React from "react";
import PropTypes from "prop-types";
import Part from "./Part";

function Content(props) {
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
}

Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
    })
  ),
};

export default Content;
