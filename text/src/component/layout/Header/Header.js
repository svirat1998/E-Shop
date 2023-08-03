


// import React,{useState} from 'react'
// import "./Header.css";
// import { IoFastFoodOutline } from "react-icons/io5";
// import Navigation from "../Header/Navigation";
// import SearchIcon from "@mui/icons-material/Search";

// import { Link } from "react-router-dom";
// import {  FiLogIn } from "react-icons/fi";
// // import { FaUser } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";


// const Header = () => {
  
//   const [keyword, setKeyword] = useState("");
//   const navigate = useNavigate();
//   const searchSubmitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       navigate(`/products/${keyword}`);
//     } else {
//       navigate("/products");
//     }
//   };
//   return (
//     <>
//     <nav className="Header">
//       <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        
//       <Link to="/"><IoFastFoodOutline /></Link> 
//       </motion.div>

//       <div >
//       <form className="second" onSubmit={searchSubmitHandler}>
//         <input type="text" placeholder="Search for products,brands and more" 
//         onChange={(e) => setKeyword(e.target.value)}/>
//         <SearchIcon />
//         </form> 
//       </div>
      
//       <div className='main'>
      
//         <Link to='/login'><FiLogIn /></Link>
        
//       </div>
//     </nav>

//     <Navigation />
//     </>
//   )
// }

// export default Header









// import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import { shades } from "./theme.js";
// import { setIsCartOpen } from "../../state";

function Header() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          // onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
         <Link to='/' color="red">PPPS</Link>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <Link to='/login'><PersonOutline /></Link>
          </IconButton>
          <Badge
           // badgeContent={cart.length}
            color="secondary"
            // invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              // onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              {/* <ShoppingBagOutlined /> */}
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

