const MenProduct = require("../models/menModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createLatsetProduct = catchAsyncErrors(async (req, res, next) => {
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

  const product = await MenProduct.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllLatestProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await MenProduct.countDocuments();

  const apiFeature = new ApiFeatures(MenProduct.find(), req.query)
    .search()
    .filter();

  let newproducts = await apiFeature.query;

  let filteredProductsCount = newproducts.length;

  apiFeature.pagination(resultPerPage);

//   newproducts = await apiFeature.query;

  res.status(200).json({
    success: true,
    newproducts,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const newproducts = await MenProduct.find();

  res.status(200).json({
    success: true,
    newproducts,
  });
});

// Get Product Details
exports.getLatestProductDetails = catchAsyncErrors(async (req, res, next) => {
  const productt = await MenProduct.findById(req.params.id);

  if (!productt) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    productt,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let productt = await MenProduct.findById(req.params.id);

  if (!productt) {
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
    for (let i = 0; i < productt.images.length; i++) {
      await cloudinary.v2.uploader.destroy(productt.images[i].public_id);
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

  productt = await MenProduct.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    productt,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const productt = await MenProduct.findById(req.params.id);

  if (!productt) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < productt.images.length; i++) {
    await cloudinary.v2.uploader.destroy(productt.images[i].public_id);
  }

  await productt.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// Create New Review or Update the review
exports.createMenProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, producttId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const productt = await MenProduct.findById(producttId);

  const isReviewed = productt.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    productt.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    productt.reviews.push(review);
    productt.numOfReviews = productt.reviews.length;
  }

  let avg = 0;

  productt.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  productt.ratings = avg / productt.reviews.length;

  await productt.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const productt = await MenProduct.findById(req.query.id);

  if (!productt) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: productt.reviews,
  });
});

// Delete Review
exports.deleteMenReview = catchAsyncErrors(async (req, res, next) => {
  const productt = await MenProduct.findById(req.query.productId);

  if (!productt) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = productt.reviews.filter(
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

  await MenProduct.findByIdAndUpdate(
    req.query.producttId,
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
