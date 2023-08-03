import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import LatestProductCard from "./LatestProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors,} from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import toast from "react-hot-toast"
import { getLatestProduct } from "../../actions/latProduct";

const Latestproduct = () => {
  
  const dispatch = useDispatch();
  const { loading, error, newproducts } = useSelector((state) => state.newproducts );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getLatestProduct());
  }, [dispatch, error, ]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <h2 className="homeHeading">Latest  Products</h2>

          <div className="container" id="container">
            {newproducts &&
              newproducts.map((productt) => (
                <LatestProductCard key={productt._id} productt={productt} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Latestproduct;



