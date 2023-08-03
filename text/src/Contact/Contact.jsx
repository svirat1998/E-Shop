import React from "react";
import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        {/* <span className="Span">BE IN TOUCH WITH US:</span> */}
        <div className="mail">
        
          <input type="text" placeholder="Enter your e-mail..." />
          {/* <button className="bttn">JOIN US</button> */}
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;





// import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
// import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
// import { useState } from "react";

// const Subscribe = () => {
//   const [email, setEmail] = useState("");

//   return (
//     <Box width="80%" margin="80px auto" textAlign="center">
//       <IconButton>
//         <MarkEmailReadOutlinedIcon fontSize="large" />
//       </IconButton>
//       <Typography variant="h3">Subscribe To Our Newsletter</Typography>
//       <Typography>
//         and receive $20 coupon for your first order when you checkout
//       </Typography>
//       <Box
//         p="2px 4px"
//         m="15px auto"
//         display="flex"
//         alignItems="center"
//         width="75%"
//         backgroundColor="#F2F2F2"
//       >
//         <InputBase
//           sx={{ ml: 1, flex: 1 }}
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />
//         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//         <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
//           Subscribe
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Subscribe;
