const express = require("express");
const { createKidProduct ,getAllKidProducts, getKidProductDetails, createKidProductReview, deleteKidReview, deleteProduct, updateProduct, getAdminProducts} = require("../controllers/kidController");
const {    getProductReviews} = require("../controllers/womenController");


const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/kidproducts").get(getAllKidProducts);

// router
//   .route("/kidProduct/new")
//   .post(createKidProduct);

router
  .route("/admin/kidproducts")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);


router
  .route("/admin/kidProduct/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createKidProduct);


router
  .route("/admin/kidProduct/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/kidProduct/:id").get(getKidProductDetails);


router.route("/review").put(isAuthenticatedUser, createKidProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteKidReview);

module.exports = router;
