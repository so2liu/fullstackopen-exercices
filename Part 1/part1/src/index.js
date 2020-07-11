import React from "react";
import ReactDOM from "react-dom";
import CourseApp from "./CourseApp";
import UniCafeApp from "./UniCafeApp";
import AnecdotesApp from "./AnecdotesApp";

const App = () => {
  return (
    <>
      <CourseApp />
      <hr />
      <UniCafeApp />
      <hr />
      <AnecdotesApp />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
