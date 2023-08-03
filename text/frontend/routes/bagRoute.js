const express = require("express");
const { deleteBagReview, createBagProductReview, getBagProductDetails, getAllBagProducts, createBagProduct, getAdminProducts, updateProduct, deleteProduct } = require("../controllers/bagController");

const {    getProductReviews} = require("../controllers/womenController");


const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/bagproducts").get(getAllBagProducts);

// router
//   .route("/BagProduct/new")
//   .post(createBagProduct);

router
  .route("/admin/bagproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


router
  .route("/admin/BagProduct/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBagProduct);


router
  .route("/admin/bagProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/bagProduct/:id").get(getBagProductDetails);


router.route("/review").put(isAuthenticatedUser, createBagProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteBagReview);

module.exports = router;
