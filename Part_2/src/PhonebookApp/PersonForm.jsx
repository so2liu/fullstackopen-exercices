import React from "react";
import PropTypes from "prop-types";

function PersonForm({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          onChange={(e) => {
            const value = e.target.value;
            onChange((prev) => ({ ...prev, name: value }));
          }}
        />
      </div>
      <div>
        number:{" "}
        <input
          onChange={(e) => {
            const value = e.target.value;
            onChange((prev) => ({ ...prev, number: value }));
          }}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

PersonForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default PersonForm;
