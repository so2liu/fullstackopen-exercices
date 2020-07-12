import React from "react";
import PropTypes from "prop-types";

function Persons({ persons, onRemove }) {
  return (
    <div>
      {persons.map((p) => (
        <p key={p.name}>
          {p.name} {p.number}{" "}
          <button onClick={() => onRemove(p)}>Delete</button>
        </p>
      ))}
    </div>
  );
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onRemove: PropTypes.func,
};

export default Persons;
