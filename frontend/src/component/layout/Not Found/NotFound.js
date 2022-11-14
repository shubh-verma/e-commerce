import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />
      <Typography>Page Not Found</Typography>
      <Link to="/">
        <Typography variant="h5">Go Home</Typography>
      </Link>
    </div>
  );
};

export default NotFound;
