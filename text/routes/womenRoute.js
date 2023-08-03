const express = require("express");
const { getAllWomenProducts,  getLatestProductDetails, createMenProductReview,  deleteMenReview, getProductReviews, getAdminProducts, deleteProduct, updateProduct} = require("../controllers/womenController");
const { createWomenProduct } = require("../controllers/womenController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/womenproducts").get(getAllWomenProducts);

// router
//   .route("/womenProduct/new")
//   .post(createWomenProduct);

router
  .route("/admin/womenproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


router
  .route("/admin/womenProduct/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createWomenProduct);


router
  .route("/admin/womenProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/womenProduct/:id").get(getLatestProductDetails);


router.route("/review").put(isAuthenticatedUser, createMenProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteMenReview);

module.exports = router;
