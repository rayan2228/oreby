import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, linkClassName, listItemName, link}) => {
  return (
    <li className={`${className}`}>
      <Link to={link} className={`${linkClassName}`}>
        {listItemName}
      </Link>
    </li>
  );
};

export default ListItem;
