const BagProduct = require("../models/bagModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createBagProduct = catchAsyncErrors(async (req, res, next) => {
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

  const product = await BagProduct.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllBagProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await BagProduct.countDocuments();

  const apiFeature = new ApiFeatures(BagProduct.find(), req.query)
    .search()
    .filter();

  let bagproducts = await apiFeature.query;

  let filteredProductsCount = bagproducts.length;

  apiFeature.pagination(resultPerPage);

//   newproducts = await apiFeature.query;

  res.status(200).json({
    success: true,
    bagproducts,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const bagproducts = await BagProduct.find();

  res.status(200).json({
    success: true,
    bagproducts,
  });
});

// Get Product Details
exports.getBagProductDetails = catchAsyncErrors(async (req, res, next) => {
  const bagProduct = await BagProduct.findById(req.params.id);

  if (!bagProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    bagProduct,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await BagProduct.findById(req.params.id);

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

  product = await BagProduct.findByIdAndUpdate(req.params.id, req.body, {
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
  const bagProduct = await BagProduct.findById(req.params.id);

  if (!bagProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < bagProduct.images.length; i++) {
    await cloudinary.v2.uploader.destroy(bagProduct.images[i].public_id);
  }

  await bagProduct.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// Create New Review or Update the review
exports.createBagProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, bagProductId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const bagProduct = await BagProduct.findById(bagProductId);

  const isReviewed = bagProduct.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    bagProduct.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    bagProduct.reviews.push(review);
    bagProduct.numOfReviews = bagProduct.reviews.length;
  }

  let avg = 0;

  bagProduct.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  bagProduct.ratings = avg / bagProduct.reviews.length;

  await bagProduct.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const bagProduct = await BagProduct.findById(req.query.id);

  if (!bagProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: bagProduct.reviews,
  });
});

// Delete Review
exports.deleteBagReview = catchAsyncErrors(async (req, res, next) => {
  const bagProduct = await BagProduct.findById(req.query.BagProductId);

  if (!bagProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = bagProduct.reviews.filter(
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

  await BagProduct.findByIdAndUpdate(
    req.query.bagProductId,
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
