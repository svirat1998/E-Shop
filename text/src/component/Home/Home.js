// import React, { Fragment, useEffect } from "react";
// // import { CgMouse } from "react-icons/all";
// import "./Home.css";
// import Categories from "../../Categories/Categories"
// import ProductCard from "./ProductCard.js";
// import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import toast from "react-hot-toast"
// // import Latestproduct from "./Latestproduct";
// import Founder from "./Founder/Founder";
// import Contact from "../../Contact/Contact"



// const Home = () => {
  
//   const dispatch = useDispatch();
//   const { loading, error, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProduct());
//   }, [dispatch, error]);

//   return (
//     <Fragment>
      
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="ECOMMERCE" />

//           <section id="hero">
//         <h4>Trade-in-offer</h4>
//         <h2>Super value deals</h2>
//         <h1>On all products</h1>
//         <p>Save more with coupons & up to 70% off</p>
//         <button className="hero_button">Shop Now</button>
//     </section>
//     <Categories/>
//           <h2 className="homeHeading">Featured Products</h2>

//           <div className="container" id="container">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//       {/* <Latestproduct/> */}
//       <Founder/>
//       <Contact/>
//     </Fragment>
//   );
// };

// export default Home;





import { Box, Typography, IconButton,  } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "./theme.js";
import { Fragment, useEffect, useState } from "react";
import Founder from "./Founder/Founder";
import Contact from "../../Contact/Contact"
import "./Home.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard.js";
// import Loader from "../layout/Loader/Loader";
import toast from "react-hot-toast"

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenProductCard from "../../Categories/MenProductCard";
import WomenProductCard from "../../Categories/WomenProductCard";
import KidProductCard from "../../Categories/KidProductCard";
import {  getLatestProduct } from "../../actions/latProduct";
import {  getWomenProduct } from "../../actions/womenAction";
import {  getKidProduct } from "../../actions/kidAction";





// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  // require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
  require.context("./img", false, /\.(png|jpe?g|svg)$/)
);

const Home = () => {

    
  const dispatch = useDispatch();
  const {  error, products } = useSelector((state) => state.products);
  const {  newproducts } = useSelector((state) => state.newproducts);
  const {  womenproducts } = useSelector((state) => state.womenproducts);
  const {  kidproducts } = useSelector((state) => state.kidproducts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    dispatch(getLatestProduct());
    dispatch(getWomenProduct());
    dispatch(getKidProduct());
  }, [dispatch, error]);


    const [value, setValue] = useState("all");
  // const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Fragment>
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
            <Typography variant="h1">Summer Sale</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
               {/* <h2 className="homeHeading">Featured Products</h2>

           <div className="container" id="container">
             {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}

     <Box width="80%" margin="80px auto">
       <Typography variant="h3" textAlign="center">
         Our Featured <b>Products</b>
       </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="2vmax auto"
        display="flex"
        flexWrap="wrap"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        width= "80vw"
        justifyContent="center"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          products.map((product) => (
            <ProductCard product={product} key={`${product.name}-${product.id}`} />
          ))}
        {value === "newArrivals" &&
          newproducts.map((productt) => (
            <MenProductCard productt={productt} key={`${productt.name}-${productt.id}`} />
          ))}


        {value === "bestSellers" &&
          womenproducts.map((womenProduct) => (
            <WomenProductCard womenProduct={womenProduct} key={`${womenProduct.name}-${womenProduct.id}`} />
          ))}

          

        {value === "topRated" &&
          kidproducts.map((kidProduct) => (
            <KidProductCard kidProduct={kidProduct} key={`${kidProduct.name}-${kidProduct.id}`} />
          ))}


      </Box>
    </Box>

    <Founder/>
    <Contact/>
    </Fragment>
  );
};

export default Home;
