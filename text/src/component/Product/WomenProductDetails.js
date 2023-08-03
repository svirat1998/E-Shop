import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import toast from "react-hot-toast"
import {addWomenItemsToCart } from "../../actions/womenCart";
import { getWomenProductDetails,womenNewReview,clearErrors, } from '../../actions/womenAction'

import { NEWWOMEN_REVIEW_RESET } from "../../constants/womenConstants";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating }
 from 
"@mui/material";

const WomenProductDetails = () => {
    const dispatch= useDispatch()
    const {id} = useParams()
    const {womenProduct,loading, error} =useSelector((state)=>state.womenDetails)

    const {success, error: reviewError} =useSelector((state)=>state.womenNewReview);

    const options = {
      size: "large",
      value: womenProduct.ratings,
      readOnly: true,
      precision: 0.5,
    };

    
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (womenProduct.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addWomenItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("womenProductId", id);

    dispatch(womenNewReview(myForm));

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
        dispatch({ type: NEWWOMEN_REVIEW_RESET });
      }
    dispatch(getWomenProductDetails(id))
    },[dispatch,id,error,reviewError,success])
  return (
    
        <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`${womenProduct.name} -- ECOMMERCE`} />
            <div className="ProductDetails">
              <div>
                  {/* <Carousel> */}
                  
                  {womenProduct.images &&
                    womenProduct.images.map((item, i) => (
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
                  <h2>{womenProduct.name}</h2>
                  <p>Product # {womenProduct._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <Rating {...options} />
                  <span className="detailsBlock-2-span">
                  
                    ({womenProduct.numOfReviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`₹${womenProduct.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button
                      disabled={womenProduct.Stock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
  
                  <p>
                    Status:
                    <b className={womenProduct.Stock < 1 ? "redColor" : "greenColor"}>
                      {womenProduct.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>
                </div>
  
                <div className="detailsBlock-4">
                  Description : <p>{womenProduct.description}</p>
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
  
            {womenProduct.reviews && womenProduct.reviews[0] ? (
              <div className="reviews">
                {womenProduct.reviews &&
                  womenProduct.reviews.map((review) => (
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

export default WomenProductDetails
