import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <Breadcrumb
      title={window.location.pathname.split("/")[1]}
      linkVal={"home"}
      link={"/"}
      currentPage={window.location.pathname.split("/")[1]}
      currentPageLink={window.location.pathname}
    />
  );
};

export default About;
