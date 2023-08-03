import React from 'react'
import { Link } from "react-router-dom";
import { Rating } from "@mui/lab";

const LatestProductCard = ({productt}) => {
    const options = {
        value: productt.ratings,
        readOnly: true,
        precision: 0.5,
      };
  return (
    <Link className="productCard" to={`/product/${productt._id}`}>
      {/* <img src={productt.images[0].url} alt={productt.name} /> */}
      <img src={productt.images} alt={productt.name} />
      <p>{productt.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          ({productt.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${productt.price}`}</span>
    </Link>
  )
}

export default LatestProductCard