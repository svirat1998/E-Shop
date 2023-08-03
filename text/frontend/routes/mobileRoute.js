const express = require("express");

const { deleteMobileReview, createMobileProductReview, getMobileProductDetails, getAllMobileProducts, createMobileProduct, updateProduct, deleteProduct, getAdminProducts } = require("../controllers/mobileController");

const {    getProductReviews} = require("../controllers/womenController");


const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/mobileproducts").get(getAllMobileProducts);

// router
//   .route("/mobileProduct/new")
//   .post(createMobileProduct);

router
  .route("/admin/mobileproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


router
  .route("/admin/mobileProduct/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createMobileProduct);


router
  .route("/admin/mobileProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/mobileProduct/:id").get(getMobileProductDetails);


router.route("/review").put(isAuthenticatedUser, createMobileProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteMobileReview);

module.exports = router;
