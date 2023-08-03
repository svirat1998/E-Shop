import React from "react";
// import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
// import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      {/* <ErroIcon /> */}

      {/* <Typography>Page Not Found </Typography> */}
      <h4>Page Not Found</h4>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
