import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

function Alarm({ type, content }) {
  return <div className={styles[type]}>{content}</div>;
}

Alarm.propTypes = {
  type: PropTypes.oneOf(["success", "error"]),
  content: PropTypes.string,
};

export default Alarm;
