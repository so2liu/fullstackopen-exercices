import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Total from "./Total";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        exercises: PropTypes.number,
        id: PropTypes.number,
      })
    ),
  }),
};

export default Course;
