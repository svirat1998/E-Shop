const express = require("express");
const { getAllLatestProducts, createLatsetProduct, getLatestProductDetails, createMenProductReview,  deleteMenReview, getProductReviews, getAdminProducts, updateProduct, deleteProduct} = require("../controllers/menController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/newproducts").get(getAllLatestProducts);

// router
//   .route("/menProduct/new")
//   .post( createLatsetProduct);

router
  .route("/admin/newproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


router
  .route("/admin/menProduct/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createLatsetProduct);


router
  .route("/admin/productt/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/productt/:id").get(getLatestProductDetails);


router.route("/review").put(isAuthenticatedUser, createMenProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteMenReview);

module.exports = router;
