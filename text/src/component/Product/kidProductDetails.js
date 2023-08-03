
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import toast from "react-hot-toast"
import {addKidItemsToCart } from "../../actions/kidCart";
import { getKidProductDetails,KidNewReview,clearErrors, } from '../../actions/kidAction'

import { NEWKID_REVIEW_RESET } from "../../constants/kidConstants";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating }
 from 
"@mui/material";

const KidProductDetails = () => {
    const dispatch= useDispatch()
    const {id} = useParams()
    const {kidProduct,loading, error} =useSelector((state)=>state.kidDetails)

    const {success, error: reviewError} =useSelector((state)=>state.kidNewReview);

    const options = {
      size: "large",
      value: kidProduct.ratings,
      readOnly: true,
      precision: 0.5,
    };

    
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (kidProduct.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addKidItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("kidProductId", id);

    dispatch(KidNewReview(myForm));

    setOpen(false);
  };



    useEffect(()=>{
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
  
      if (reviewError) {
        toast.error(reviewError);
        dispatch(clearErrors());
      }
  
      if (success) {
        toast.success("Review Submitted Successfully");
        dispatch({ type: NEWKID_REVIEW_RESET });
      }
    dispatch(getKidProductDetails(id))
    },[dispatch,id,error,reviewError,success])
  return (
    
        <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`${kidProduct.name} -- ECOMMERCE`} />
            <div className="ProductDetails">
              <div>
                  {/* <Carousel> */}
                  
                  {kidProduct.images &&
                    kidProduct.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                    
                {/* </Carousel>    */}
              </div>
  
              <div>
                <div className="detailsBlock-1">
                  <h2>{kidProduct.name}</h2>
                  <p>Product # {kidProduct._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <Rating {...options} />
                  <span className="detailsBlock-2-span">
                  
                    ({kidProduct.numOfReviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`₹${kidProduct.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button
                      disabled={kidProduct.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
  
                  <p>
                    Status:
                    <b className={kidProduct.Stock < 1 ? "redColor" : "greenColor"}>
                      {kidProduct.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>
                </div>
  
                <div className="detailsBlock-4">
                  Description : <p>{kidProduct.description}</p>
                </div>
  
                <button onClick={submitReviewToggle} className="submitReview">
                  Submit Review
                </button>
              </div>
            </div>
  
            <h3 className="reviewsHeading">REVIEWS</h3>
  
            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />
  
                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
  
            {kidProduct.reviews && kidProduct.reviews[0] ? (
              <div className="reviews">
                {kidProduct.reviews &&
                  kidProduct.reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
          </Fragment>
        )}
      </Fragment>
  )
}

export default KidProductDetails;
