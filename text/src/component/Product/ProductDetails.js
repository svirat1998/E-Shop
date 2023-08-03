
// import React, { Fragment, useEffect, useState } from "react";
// // import Carousel from "react-material-ui-carousel";
// import "./ProductDetails.css";
// import { useSelector, useDispatch,  } from "react-redux";
// import {
//   clearErrors,
//   getProductDetails,
//   newReview,
// } from "../../actions/productAction";
// import ReviewCard from "./ReviewCard.js";
// import Loader from "../layout/Loader/Loader";

// import MetaData from "../layout/MetaData";
// import { addItemsToCart } from "../../actions/cartAction";
// import { NEW_REVIEW_RESET } from "../../constants/productConstants";
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating,  } 
//   from "@mui/material";
//   import toast from "react-hot-toast" 
// import { useParams } from "react-router-dom";
// // import { getLatestProductDetails } from "../../actions/latProduct";

// const ProductDetails = () => {
//   const dispatch = useDispatch();

//   const {id} = useParams();
  
//   const { product, loading, error } = useSelector(
//     (state) => state.productDetails
//   );
  

//   const { success, error: reviewError } = useSelector(
//     (state) => state.newReview
//   );

//   const options = {
//     size: "large",
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [open, setOpen] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const increaseQuantity = () => {
//     if (product.Stock <= quantity) return;

//     const qty = quantity + 1;
//     setQuantity(qty);
//   };

//   const decreaseQuantity = () => {
//     if (1 >= quantity) return;

//     const qty = quantity - 1;
//     setQuantity(qty);
//   };

//   const addToCartHandler = () => {
//     dispatch(addItemsToCart(id, quantity));
//     toast.success("Item Added To Cart");
//   };

//   const submitReviewToggle = () => {
//     open ? setOpen(false) : setOpen(true);
//   };

//   const reviewSubmitHandler = () => {
//     const myForm = new FormData();

//     myForm.set("rating", rating);
//     myForm.set("comment", comment);
//     myForm.set("productId", id);

//     dispatch(newReview(myForm));

//     setOpen(false);
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }

//     if (reviewError) {
//       toast.error(reviewError);
//       dispatch(clearErrors());
//     }

//     if (success) {
//       toast.success("Review Submitted Successfully");
//       dispatch({ type: NEW_REVIEW_RESET });
//     }
//     dispatch(getProductDetails(id));
//     // dispatch(getLatestProductDetails(id));
//   }, [dispatch, id, error, reviewError,success]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title={`${product.name} -- ECOMMERCE`} />
//           <div className="ProductDetails">
//             <div>
//                 {/* <Carousel> */}
                
//                 {product.images &&
//                   product.images.map((item, i) => (
//                     <img
//                       className="CarouselImage"
//                       key={i}
//                       src={item.url}
//                       alt={`${i} Slide`}
//                     />
//                   ))}
                  
//               {/* </Carousel>    */}
//             </div>

//             <div>
//               <div className="detailsBlock-1">
//                 <h2>{product.name}</h2>
//                 <p>Product # {product._id}</p>
//               </div>
//               <div className="detailsBlock-2">
//                 <Rating {...options} />
//                 <span className="detailsBlock-2-span">
                
//                   ({product.numOfReviews} Reviews)
//                 </span>
//               </div>
//               <div className="detailsBlock-3">
//                 <h1>{`₹${product.price}`}</h1>
//                 <div className="detailsBlock-3-1">
//                   <div className="detailsBlock-3-1-1">
//                     <button onClick={decreaseQuantity}>-</button>
//                     <input readOnly type="number" value={quantity} />
//                     <button onClick={increaseQuantity}>+</button>
//                   </div>
//                   <button
//                     disabled={product.Stock < 1 ? true : false}
//                     onClick={addToCartHandler}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>

//                 <p>
//                   Status:
//                   <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
//                     {product.Stock < 1 ? "OutOfStock" : "InStock"}
//                   </b>
//                 </p>
//               </div>

//               <div className="detailsBlock-4">
//                 Description : <p>{product.description}</p>
//               </div>

//               <button onClick={submitReviewToggle} className="submitReview">
//                 Submit Review
//               </button>
//             </div>
//           </div>

//           <h3 className="reviewsHeading">REVIEWS</h3>

//           <Dialog
//             aria-labelledby="simple-dialog-title"
//             open={open}
//             onClose={submitReviewToggle}
//           >
//             <DialogTitle>Submit Review</DialogTitle>
//             <DialogContent className="submitDialog">
//               <Rating
//                 onChange={(e) => setRating(e.target.value)}
//                 value={rating}
//                 size="large"
//               />

//               <textarea
//                 className="submitDialogTextArea"
//                 cols="30"
//                 rows="5"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               ></textarea>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={submitReviewToggle} color="secondary">
//                 Cancel
//               </Button>
//               <Button onClick={reviewSubmitHandler} color="primary">
//                 Submit
//               </Button>
//             </DialogActions>
//           </Dialog>

//           {product.reviews && product.reviews[0] ? (
//             <div className="reviews">
//               {product.reviews &&
//                 product.reviews.map((review) => (
//                   <ReviewCard key={review._id} review={review} />
//                 ))}
//             </div>
//           ) : (
//             <p className="noReviews">No Reviews Yet</p>
//           )}
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default ProductDetails;





// import React, { Fragment, useEffect, useState } from "react";
// // import Carousel from "react-material-ui-carousel";
// import "./ProductDetails.css";
// import { useSelector, useDispatch,  } from "react-redux";
// import {
//   clearErrors,
//   getProductDetails,
//   newReview,
// } from "../../actions/productAction";
// import ReviewCard from "./ReviewCard.js";
// import Loader from "../layout/Loader/Loader";

// import MetaData from "../layout/MetaData";
// import { addItemsToCart } from "../../actions/cartAction";
// import { NEW_REVIEW_RESET } from "../../constants/productConstants";
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating,  } 
//   from "@mui/material";
//   import toast from "react-hot-toast" 
// import { useParams } from "react-router-dom";
// // import { getLatestProductDetails } from "../../actions/latProduct";








// import { Box, Button, IconButton, Typography,Rating,Dialog,DialogActions,DialogContent,DialogTitle } from "@mui/material";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { shades } from "../../component/Home/theme";
// import { useDispatch, useSelector } from "react-redux";
// import "./ProductDetails.css";
// import {
//   clearErrors,
//   getProductDetails,
//   newReview,
// } from "../../actions/productAction";
// import ReviewCard from "./ReviewCard.js";
// import { addItemsToCart } from "../../actions/cartAction";
// import { NEW_REVIEW_RESET } from "../../constants/productConstants";
//   import toast from "react-hot-toast" 
// // import { useParams } from "react-router-dom";
// // import { getLatestProductDetails } from "../../actions/latProduct";


// const ProductDetails = () => {
  
//   const [value, setValue] = useState("description");
//   // const [count, setCount] = useState(1);

//  const dispatch = useDispatch();
//   const {id} = useParams();
  
//   const { product, error } = useSelector(
//     (state) => state.productDetails
//   );
  

//   const { success, error: reviewError } = useSelector(
//     (state) => state.newReview
//   );

//   const options = {
//     size: "medium",
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [open, setOpen] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const increaseQuantity = () => {
//     if (product.Stock <= quantity) return;

//     const qty = quantity + 1;
//     setQuantity(qty);
//   };

//   const decreaseQuantity = () => {
//     if (1 >= quantity) return;


//     const qty = quantity - 1;
//     setQuantity(qty);
//   };

//   const addToCartHandler = () => {
//     dispatch(addItemsToCart(id, quantity));
//     toast.success("Item Added To Cart");
//   };

//   const submitReviewToggle = () => {
//     open ? setOpen(false) : setOpen(true);
//   };

//   const reviewSubmitHandler = () => {
//     const myForm = new FormData();

//     myForm.set("rating", rating);
//     myForm.set("comment", comment);
//     myForm.set("productId", id);

//     dispatch(newReview(myForm));

//     setOpen(false);
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }

//     if (reviewError) {
//       toast.error(reviewError);
//       dispatch(clearErrors());
//     }

//     if (success) {
//       toast.success("Review Submitted Successfully");
//       dispatch({ type: NEW_REVIEW_RESET });
//     }
//     dispatch(getProductDetails(id));
//     // dispatch(getLatestProductDetails(id));
//   }, [dispatch, id, error, reviewError,success]);



//   const handleChange = (event,newValue)=>{setValue(newValue)}
  


//   return (
//     <Box width="80%" m="80px auto">
//       <Box display="flex" flexWrap="wrap" columnGap="40px">
//         {/* IMAGES */}
        
//         <Box flex="1 1 40%" mb="40px">
//           {/* <img
//             // alt={product.name}
                  
                  
//             width="100%"
//             height="100%"
            
//             style={{ objectFit: "contain" }}
//           /> */}
//                        {/* <div> */}
//                  {/* <Carousel> */}
                
//                {product.images &&
//                   product.images.map((item, i) => (
//                     <img
                    
//             width="100%"
//             height="100%"
//             style={{ objectFit: "contain" }}
//                       // className="CarouselImage"
//                       key={i}
//                       src={item.url}
//                       alt={`${i} Slide`}
//                     />
//                   ))}
                  
//               {/* </Carousel>    */}
//             {/* </div> */}
//         </Box>

//         {/* ACTIONS */}
//         <Box flex="1 1 50%" mb="40px">
//           <Box display="flex" justifyContent="space-between">
//             <Box>Home/Item</Box>
//             <Box>Prev Next</Box>
//           </Box>

//           <Box m="65px 0 25px 0">
//             <Typography variant="h4">{product.name}</Typography>
//             <Typography variant="h6" mt="8px" fontSize="12px">Product #{product._id}</Typography>
//             <Rating color="yellow"{...options} />
//                  <span mt="10px" fontSize="28px" className="detailsBlock-2-span">
//                   ({product.numOfReviews} Reviews)
//                  </span>
//             <Typography mt="15px">₹{product.price}</Typography>
//             <Typography sx={{ mt: "20px" }}>
//               {/* {product.description} */}
//             </Typography>
//           </Box>

//           <Box display="flex" alignItems="center" minHeight="50px">
//             <Box
//               display="flex"
//               alignItems="center"
//               border={`1.5px solid ${shades.neutral[300]}`}
//               mr="20px"
//               p="2px 5px"
//             >
//               <IconButton onClick={decreaseQuantity }>
//                 <RemoveIcon />
//               </IconButton>
//               <Typography sx={{ p: "0 5px" }} readOnly type="number" value={quantity}>{quantity}</Typography>
//               <IconButton onClick={ increaseQuantity}>
//                 <AddIcon />
//               </IconButton>
//                                   {/* <IconButton onClick={decreaseQuantity}> */}
//                                   {/* <RemoveIcon /> */}
//                                   {/* </IconButton> */}
//                      {/* <input readOnly type="number" value={quantity} /> */}
//                      {/* <IconButton onClick={increaseQuantity}><AddIcon /></IconButton> */}
//             </Box>
//             <Button
//               sx={{
//                 backgroundColor: "#222222",
//                 color: "white",
//                 borderRadius: 0,
//                 minWidth: "150px",
//                 padding: "10px 40px",
//               }}
//                    disabled={product.Stock < 1 ? true : false}
//                   onClick={addToCartHandler}
//                   >
            
//               ADD TO CART
//             </Button>
//           </Box>
//           <Box>
//             <Box m="20px 0 5px 0" display="flex">
//               <FavoriteBorderOutlinedIcon />
//               <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
//             </Box>
//             {/* <Typography>CATEGORIES: {product?.attributes?.category}</Typography> */}
//           </Box>
//         </Box>
//       </Box>

//       {/* INFORMATION */}
//       <Box m="20px 0">
//         <Tabs value={value} onChange={handleChange}>
//           <Tab label="DESCRIPTION" value="description" />
//           <Tab label="REVIEWS" value="reviews" />
//         </Tabs>
//       </Box>
//       <Box display="flex" flexWrap="wrap" gap="15px">
//         {value === "description" && (
//           <div>{product.description}</div>
//         )}
//         {value === "reviews" && <div>
//         <button onClick={submitReviewToggle} className="submitReview">
//                 Submit Review
//             </button>
//               <h3 className="reviewsHeading">REVIEWS</h3>

//                    <Dialog
//             aria-labelledby="simple-dialog-title"
//             open={open}
//             onClose={submitReviewToggle}
//           >
//             <DialogTitle>Submit Review</DialogTitle>
//             <DialogContent className="submitDialog">
//               <Rating
//                 onChange={(e) => setRating(e.target.value)}
//                 value={rating}
//                 size="large"
//               />

//               <textarea
//                 className="submitDialogTextArea"
//                 cols="30"
//                 rows="5"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               ></textarea>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={submitReviewToggle} color="secondary">
//                 Cancel
//               </Button>
//               <Button onClick={reviewSubmitHandler} color="primary">
//                 Submit
//               </Button>
//             </DialogActions>
//           </Dialog>

//           {product.reviews && product.reviews[0] ? (
//             <div className="reviews">
//               {product.reviews &&
//                 product.reviews.map((review) => (
//                   <ReviewCard key={review._id} review={review} />
//                 ))}
//             </div>
//           ) : (
//             <p className="noReviews">No Reviews Yet</p>
//           )}

     
//           </div>}
//       </Box>

//       {/* RELATED ITEMS */}
//       <Box mt="50px" width="100%">
//         <Typography variant="h3" fontWeight="bold">
//           Related Products
//         </Typography>
//         {/* <Box
//           mt="20px"
//           display="flex"
//           flexWrap="wrap"
//           columnGap="1.33%"
//           justifyContent="space-between"
//         >
//           {items.slice(0, 4).map((item, i) => (
//             <Item key={`${item.name}-${i}`} item={item} />
//           ))}
//         </Box> */}
         
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetails;










import React, { useEffect } from 'react'
import "./ProductDetails.css";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch,  } from "react-redux";
import {
  getProductDetails,
} from "../../actions/productAction";



const ProductDetails = () => {

   const dispatch = useDispatch();
  const {id} = useParams();
  
  const { product } = useSelector(
    (state) => state.productDetails
  );

   useEffect(()=>{
    dispatch(getProductDetails(id));
   },[dispatch,id])

  return (
    <div>
                      {product.images &&
                  product.images.map((item, i) => (
                     <img
                       className="CarouselImage"
                       key={i}
                       src={item.url}
                       alt={`${i} Slide`}
                     />
                  ))}


    </div>
  )
}

export default ProductDetails


