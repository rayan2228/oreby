import React from "react";
import { Link } from "react-router-dom";
const Buttons = ({ title, className, linkClassName, link }) => {
  return (
    <div className={className}>
      <Link to={link} className={linkClassName}>
        {title}
      </Link>
    </div>
  );
};

export default Buttons;
