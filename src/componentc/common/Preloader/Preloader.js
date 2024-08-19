import React from "react";
import spinner from "../../../Images/spinner.svg";
import c from "../../News/News.module.css";

const Spinner = (props) => {
  return(<div>
      <img className={c.spinner} src={spinner} />;
  </div>
  )
};

export default Spinner;
