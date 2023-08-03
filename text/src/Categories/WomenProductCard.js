



import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
// import "./Home.css";

const WomenProductCard = ({ womenProduct }) => {
  const options = {
    value: womenProduct.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/womenProduct/${womenProduct._id}`}>
      <img src={womenProduct.images[0].url} alt={womenProduct.name} />
      <p>{womenProduct.name}</p>
      <div>
        <Rating  {...options} />
        <span className="productCardSpan">
          ({womenProduct.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${womenProduct.price}`}</span>
    </Link>
  );
};

export default WomenProductCard;

