import React, { Fragment, useEffect } from "react";
// import "./Home.css";
import BagProductCard from "./bagProductCard.js";
import MetaData from "../component/layout/MetaData";
import {  getBagProduct,clearErrors} from "../actions/bagAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../component/layout/Loader/Loader";
import toast from "react-hot-toast"

const Bag = () => {
  const dispatch = useDispatch();
  const { loading, error, bagproducts } = useSelector((state) => state.bagproducts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBagProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <h2 className="homeHeading">Bag & Footware</h2>

          <div className="container" id="container">
            {bagproducts &&
              bagproducts.map((bagProduct) => (
                <BagProductCard key={bagProduct._id} bagProduct={bagProduct} />
              ))}
          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Bag





