const WomenProduct = require("../models/womenModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createWomenProduct = catchAsyncErrors(async (req, res, next) => {
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

  const product = await WomenProduct.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllWomenProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await WomenProduct.countDocuments();

  const apiFeature = new ApiFeatures(WomenProduct.find(), req.query)
    .search()
    .filter();

  let womenproducts = await apiFeature.query;

  let filteredProductsCount = womenproducts.length;

  apiFeature.pagination(resultPerPage);

//   newproducts = await apiFeature.query;

  res.status(200).json({
    success: true,
    womenproducts,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const womenproducts = await WomenProduct.find();

  res.status(200).json({
    success: true,
    womenproducts,
  });
});

// Get Product Details
exports.getLatestProductDetails = catchAsyncErrors(async (req, res, next) => {
  const womenProduct = await WomenProduct.findById(req.params.id);

  if (!womenProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    womenProduct,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await WomenProduct.findById(req.params.id);

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

  product = await WomenProduct.findByIdAndUpdate(req.params.id, req.body, {
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
  const womenProduct = await WomenProduct.findById(req.params.id);

  if (!womenProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < womenProduct.images.length; i++) {
    await cloudinary.v2.uploader.destroy(womenProduct.images[i].public_id);
  }

  await womenProduct.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// Create New Review or Update the review
exports.createMenProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, womenProductId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const womenProduct = await WomenProduct.findById(womenProductId);

  const isReviewed = womenProduct.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    womenProduct.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    womenProduct.reviews.push(review);
    womenProduct.numOfReviews = womenProduct.reviews.length;
  }

  let avg = 0;

  womenProduct.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  womenProduct.ratings = avg / womenProduct.reviews.length;

  await womenProduct.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const womenProduct = await WomenProduct.findById(req.query.id);

  if (!womenProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: womenProduct.reviews,
  });
});

// Delete Review
exports.deleteMenReview = catchAsyncErrors(async (req, res, next) => {
  const womenProduct = await WomenProduct.findById(req.query.womenProductId);

  if (!womenProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = womenProduct.reviews.filter(
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

  await WomenProduct.findByIdAndUpdate(
    req.query.womenProductId,
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
