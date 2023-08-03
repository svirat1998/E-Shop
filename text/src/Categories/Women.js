
import React, { Fragment, useEffect } from "react";
// import "./Home.css";
import WomenProductCard from "./WomenProductCard.js";
import { clearErrors,} from "../actions/productAction";
import MetaData from "../component/layout/MetaData";
import {  getWomenProduct } from "../actions/womenAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../component/layout/Loader/Loader";
import toast from "react-hot-toast"

const Women = () => {
  const dispatch = useDispatch();
  const { loading, error, womenproducts } = useSelector((state) => state.womenproducts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getWomenProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <h2 className="homeHeading">Women Products</h2>

          <div className="container" id="container">
            {womenproducts &&
              womenproducts.map((womenProduct) => (
                <WomenProductCard key={womenProduct._id} womenProduct={womenProduct} />
              ))}
          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Women

