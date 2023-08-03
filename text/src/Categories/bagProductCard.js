
import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
// import "./Home.css";

const bagProductCard = ({ bagProduct }) => {
  const options = {
    value: bagProduct.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/bagProduct/${bagProduct._id}`}>
      <img src={bagProduct.images[0].url} alt={bagProduct.name} />
      <p>{bagProduct.name}</p>
      <div>
        <Rating  {...options} />
        <span className="productCardSpan">
          ({bagProduct.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${bagProduct.price}`}</span>
    </Link>
  );
};

export default bagProductCard;

