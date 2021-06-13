import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaPen, FaregCircle } from "react-icons/fa";
import "./App.css";

const Icons = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaregCircle className="icons" />;
    case "cross":
      return <FaTimes className="icons" />;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icons;
