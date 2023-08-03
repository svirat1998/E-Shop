// import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div className="leftFooter">
//         <h4>DOWNLOAD OUR APP</h4>
//         <p>Download App for Android and IOS mobile phone</p>
//         <img src={playStore} alt="playstore" />
//         <img src={appStore} alt="Appstore" />
//       </div>

//       <div className="midFooter">
//         <h1>ECOMMERCE.</h1>
//         <p>High Quality is our first priority</p>

//         <p>Copyrights 2021 &copy; MeSonuSingh</p>
//       </div>

//       <div className="rightFooter">
//         <h4>Follow Us</h4>
//         <a href="http://instagram.com/meabhisingh">Instagram</a>
//         <a href="http://youtube.com/6packprogramemr">Youtube</a>
//         <a href="http://instagram.com/meabhisingh">Facebook</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="top">
//         <div className="item">
//           <h1>Categories</h1>
//           <span>Women</span>
//           <span>Men</span>
//           <span>Shoes</span>
//           <span>Accessories</span>
//           <span>New Arrivals</span>
//         </div>
//         <div className="item">
//           <h1>Links</h1>
//           <span>FAQ</span>
//           <span>Pages</span>
//           <span>Stores</span>
//           <span>Compare</span>
//           <span>Cookies</span>
//         </div>
//         <div className="item">
//           <h1>About</h1>
//           <span>
//           Hey, Everyone I am Sonu Singh, the Student  of BCA.
//           </span>
//         </div>
//         <div className="item">
//           <h1>Contact</h1>
//           <span>
//             Svirat1998@gmail.com
//           </span>
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="left">
//           <span className="logo">Ecommerce</span>
//           <span className="copyright">
//             © Copyright 2023. All Rights Reserved
//           </span>
//         </div>
//         <div className="right">
//           <img src="/img/payment.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
// import { shades } from "./theme.js";

function Footer() {
  // const {
  //   palette: { neutral },
  // } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            // color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Greater Noida 
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: sam15021998@gmail.com
          </Typography>
          <Typography mb="30px">7631562801</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

