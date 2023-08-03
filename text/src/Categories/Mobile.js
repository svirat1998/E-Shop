import React, { Fragment, useEffect } from "react";
// import "./Home.css";
import MobileProductCard from "./MobileProductCard.js";
import MetaData from "../component/layout/MetaData";
import {  getMobileProduct ,clearErrors} from "../actions/mobileAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../component/layout/Loader/Loader";
import toast from "react-hot-toast"

const Mobile = () => {
  const dispatch = useDispatch();
  const { loading, error, mobileproducts } = useSelector((state) => state.mobileproducts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getMobileProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <h2 className="homeHeading">Mobile Products</h2>

          <div className="container" id="container">
            {mobileproducts &&
              mobileproducts.map((mobileProduct) => (
                <MobileProductCard key={mobileProduct._id} mobileProduct={mobileProduct} />
              ))}
          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Mobile





