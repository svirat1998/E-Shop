import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
// import "./Home.css";

const MobileProductCard = ({ mobileProduct }) => {
  const options = {
    value: mobileProduct.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/mobileProduct/${mobileProduct._id}`}>
      <img src={mobileProduct.images[0].url} alt={mobileProduct.name} />
      <p>{mobileProduct.name}</p>
      <div>
        <Rating  {...options} />
        <span className="productCardSpan">
          ({mobileProduct.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${mobileProduct.price}`}</span>
    </Link>
  );
};

export default MobileProductCard;

