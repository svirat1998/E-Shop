
import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
// import "./Home.css";

const KidProductCard = ({ kidProduct }) => {
  const options = {
    value: kidProduct.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/kidProduct/${kidProduct._id}`}>
      <img src={kidProduct.images[0].url} alt={kidProduct.name} />
      <p>{kidProduct.name}</p>
      <div>
        <Rating  {...options} />
        <span className="productCardSpan">
          ({kidProduct.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${kidProduct.price}`}</span>
    </Link>
  );
};

export default KidProductCard;

