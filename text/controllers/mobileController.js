const MobileProduct = require("../models/mobileModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createMobileProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await MobileProduct.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllMobileProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await MobileProduct.countDocuments();

  const apiFeature = new ApiFeatures(MobileProduct.find(), req.query)
    .search()
    .filter();

  let mobileproducts = await apiFeature.query;

  let filteredProductsCount = mobileproducts.length;

  apiFeature.pagination(resultPerPage);

//   newproducts = await apiFeature.query;

  res.status(200).json({
    success: true,
    mobileproducts,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const mobileproducts = await MobileProduct.find();

  res.status(200).json({
    success: true,
    mobileproducts,
  });
});

// Get Product Details
exports.getMobileProductDetails = catchAsyncErrors(async (req, res, next) => {
  const mobileProduct = await MobileProduct.findById(req.params.id);

  if (!mobileProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    mobileProduct,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await MobileProduct.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await MobileProduct.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const mobileProduct = await MobileProduct.findById(req.params.id);

  if (!mobileProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < mobileProduct.images.length; i++) {
    await cloudinary.v2.uploader.destroy(mobileProduct.images[i].public_id);
  }

  await mobileProduct.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// Create New Review or Update the review
exports.createMobileProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, mobileProductId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const mobileProduct = await MobileProduct.findById(mobileProductId);

  const isReviewed = mobileProduct.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    mobileProduct.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    mobileProduct.reviews.push(review);
    mobileProduct.numOfReviews = mobileProduct.reviews.length;
  }

  let avg = 0;

  mobileProduct.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  mobileProduct.ratings = avg / mobileProduct.reviews.length;

  await mobileProduct.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const mobileProduct = await MobileProduct.findById(req.query.id);

  if (!mobileProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: mobileProduct.reviews,
  });
});

// Delete Review
exports.deleteMobileReview = catchAsyncErrors(async (req, res, next) => {
  const mobileProduct = await MobileProduct.findById(req.query.BagProductId);

  if (!mobileProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = mobileProduct.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await MobileProduct.findByIdAndUpdate(
    req.query.mobileProductId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
