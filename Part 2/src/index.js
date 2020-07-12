import React from "react";
import ReactDOM from "react-dom";
import CourseApp from "./CourseApp";
import PhonebookApp from "./PhonebookApp";
import RestCountries from "./RestCountries";

const App = () => {
  return (
    <>
      <CourseApp />
      <hr />
      <PhonebookApp />
      <hr />
      <RestCountries />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
