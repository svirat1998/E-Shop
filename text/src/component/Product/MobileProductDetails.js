import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import toast from "react-hot-toast"
import {addmobileItemsToCart } from "../../actions/mobileCart";
import { getMobileProductDetails,mobileNewReview,clearErrors, } from '../../actions/mobileAction'

import { NEWMOBILE_REVIEW_RESET } from "../../constants/mobileConstants";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating }
 from 
"@mui/material";

const MobileProductDetails = () => {
    const dispatch= useDispatch()
    const {id} = useParams()
    const {mobileProduct,loading, error} =useSelector((state)=>state.mobileDetails)

    const {success, error: reviewError} =useSelector((state)=>state.mobileNewReview);

    const options = {
      size: "large",
      value: mobileProduct.ratings,
      readOnly: true,
      precision: 0.5,
    };

    
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (mobileProduct.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addmobileItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("mobileProductId", id);

    dispatch(mobileNewReview(myForm));

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
        dispatch({ type: NEWMOBILE_REVIEW_RESET });
      }
    dispatch(getMobileProductDetails(id))
    },[dispatch,id,error,reviewError,success])
  return (
<Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`${mobileProduct.name} -- ECOMMERCE`} />
            <div className="ProductDetails">
              <div>
                  {/* <Carousel> */}
                  
                  {mobileProduct.images &&
                    mobileProduct.images.map((item, i) => (
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
                  <h2>{mobileProduct.name}</h2>
                  <p>Product # {mobileProduct._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <Rating {...options} />
                  <span className="detailsBlock-2-span">
                  
                    ({mobileProduct.numOfReviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`₹${mobileProduct.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button
                      disabled={mobileProduct.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
  
                  <p>
                    Status:
                    <b className={mobileProduct.Stock < 1 ? "redColor" : "greenColor"}>
                      {mobileProduct.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>
                </div>
  
                <div className="detailsBlock-4">
                  Description : <p>{mobileProduct.description}</p>
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
  
            {mobileProduct.reviews && mobileProduct.reviews[0] ? (
              <div className="reviews">
                {mobileProduct.reviews &&
                  mobileProduct.reviews.map((review) => (
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

export default MobileProductDetails

