import { Button } from "@mui/material";
import React from "react";
import "./Contact.css";
// import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforsonu@gmail.com">
        <Button>Contact: svirat1998@gmail.com</Button>
        {/* <button>Contact: svirat1998@gmail.com</button> */}
      </a>
    </div>
  );
};

export default Contact;
