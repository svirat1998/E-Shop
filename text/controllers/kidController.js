const KidProduct = require("../models/kidModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createKidProduct = catchAsyncErrors(async (req, res, next) => {
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

  const product = await KidProduct.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllKidProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await KidProduct.countDocuments();

  const apiFeature = new ApiFeatures(KidProduct.find(), req.query)
    .search()
    .filter();

  let kidproducts = await apiFeature.query;

  let filteredProductsCount = kidproducts.length;

  apiFeature.pagination(resultPerPage);

//   newproducts = await apiFeature.query;

  res.status(200).json({
    success: true,
    kidproducts,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

// Get All Product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const kidproducts = await KidProduct.find();

  res.status(200).json({
    success: true,
    kidproducts,
  });
});

// Get Product Details
exports.getKidProductDetails = catchAsyncErrors(async (req, res, next) => {
  const kidProduct = await KidProduct.findById(req.params.id);

  if (!kidProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    kidProduct,
  });
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let kidProduct = await KidProduct.findById(req.params.id);

  if (!kidProduct) {
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

  kidProduct = await KidProduct.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    kidProduct,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const kidProduct = await KidProduct.findById(req.params.id);

  if (!kidProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < kidProduct.images.length; i++) {
    await cloudinary.v2.uploader.destroy(kidProduct.images[i].public_id);
  }

  await kidProduct.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// Create New Review or Update the review
exports.createKidProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, kidProductId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const kidProduct = await KidProduct.findById(kidProductId);

  const isReviewed = kidProduct.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    kidProduct.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    kidProduct.reviews.push(review);
    kidProduct.numOfReviews = kidProduct.reviews.length;
  }

  let avg = 0;

  kidProduct.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  kidProduct.ratings = avg / kidProduct.reviews.length;

  await kidProduct.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const kidProduct = await KidProduct.findById(req.query.id);

  if (!kidProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: kidProduct.reviews,
  });
});

// Delete Review
exports.deleteKidReview = catchAsyncErrors(async (req, res, next) => {
  const kidProduct = await KidProduct.findById(req.query.kidProductId);

  if (!kidProduct) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = kidProduct.reviews.filter(
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

  await kidProduct.findByIdAndUpdate(
    req.query.kidProductId,
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
