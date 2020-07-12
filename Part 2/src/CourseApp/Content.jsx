import React from "react";
import PropTypes from "prop-types";
import Part from "./Part";

function Content({ parts }) {
  return (
    <>
      {parts.map((p) => (
        <Part key={p.id} name={p.name} exercises={p.exercises} />
      ))}
    </>
  );
}

Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.number,
      id: PropTypes.number,
    })
  ),
};

export default Content;
