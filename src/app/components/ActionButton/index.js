"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./actionButton.module.css";

const ActionButton = (props) => {
  const {
    title = "",
    icon = null,
    handleClick = () => {},
    isPrimary = false,
  } = props;
  return (
    <button
      className={styles.actionBtn}
      onClick={handleClick}
      isprimary={`${isPrimary}`}
    >
      {icon && <FontAwesomeIcon icon={icon} transform="left-4" />}
      {title}
    </button>
  );
};

export default ActionButton;
