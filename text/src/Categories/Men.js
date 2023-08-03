import React, { Fragment, useEffect } from "react";
// import "./Home.css";
import MenProductCard from "./MenProductCard.js";
import { clearErrors,} from "../actions/productAction";
import MetaData from "../component/layout/MetaData";
import {  getLatestProduct } from "../actions/latProduct";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../component/layout/Loader/Loader";
import toast from "react-hot-toast"

const Men = () => {
  const dispatch = useDispatch();
  const { loading, error, newproducts } = useSelector((state) => state.newproducts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getLatestProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <h2 className="homeHeading">Men Products</h2>

          <div className="container" id="container">
            {newproducts &&
              newproducts.map((productt) => (
                <MenProductCard key={productt._id} productt={productt} />
              ))}
          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Men
