import React, { Fragment, useEffect } from "react";
// import "./Home.css";
import KidProductCard from "./KidProductCard.js";
import { clearErrors,} from "../actions/kidAction";
import MetaData from "../component/layout/MetaData";
import {  getKidProduct } from "../actions/kidAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../component/layout/Loader/Loader";
import toast from "react-hot-toast"

const Kid = () => {
  const dispatch = useDispatch();
  const { loading, error, kidproducts } = useSelector((state) => state.kidproducts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getKidProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <h2 className="homeHeading">Kid Products</h2>

          <div className="container" id="container">
            {kidproducts &&
              kidproducts.map((kidProduct) => (
                <KidProductCard key={kidProduct._id} kidProduct={kidProduct} />
              ))}
          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Kid




