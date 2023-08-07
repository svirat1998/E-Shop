
import Product from "../model/product.js"
import cloudinary from "cloudinary"
import catchAsyncErrors from "../middleware/catchAsyncErrors.js"
import ErrorHandler from "../utils/ErrorHandler.js"
import Order from "../model/order.js"


// create product

export const createProduct = catchAsyncErrors (async(req,res,next)=>{
  try {
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
          
            const productData = req.body;
            productData.images = imagesLinks;
            
    
            const product = await Product.create(productData);
    
            res.status(201).json({
              success: true,
              product,
            });
        } catch (error) {
          return next(new ErrorHandler(error, 400));
        }

})




export const deleteProduct = catchAsyncErrors(async(req,res,next)=>{
  try{
   const product = await Product.findByIdAndDelete(req.params.id);
   if(!product){
    return next (new ErrorHandler("Product is not found with this id", 404))
   }
  
   await product.remove();
   res.status(200).json({
    success:true,
    message:"Product Deleted successfully!"
   })
  } catch(error){
  return next(new ErrorHandler(error,400))
  }
})






  //  getAllProducts 
  export const getAllProduct = catchAsyncErrors(async(req,res,next)=>{
    try{
    
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      products,
    })

    }catch(error){
      return next (new ErrorHandler(error,400))
    }
  })


  // review for a product

  export const createProductReview = catchAsyncErrors(async(req,res,next)=>{
        try {
      const { user, rating, comment, productId, orderId } = req.body;

      const product = await Product.findById(productId);

      const review = {
        user,
        rating,
        comment,
        productId,
      };

      const isReviewed = product.reviews.find(
        (rev) => rev.user._id === req.user._id
      );

      if (isReviewed) {
        product.reviews.forEach((rev) => {
          if (rev.user._id === req.user._id) {
            (rev.rating = rating), (rev.comment = comment), (rev.user = user);
          }
        });
      } else {
        product.reviews.push(review);
      }

      let avg = 0;

      product.reviews.forEach((rev) => {
        avg += rev.rating;
      });

      product.ratings = avg / product.reviews.length;

      await product.save({ validateBeforeSave: false });

      await Order.findByIdAndUpdate(
        orderId,
        { $set: { "cart.$[elem].isReviewed": true } },
        { arrayFilters: [{ "elem._id": productId }], new: true }
      );

      res.status(200).json({
        success: true,
        message: "Reviwed succesfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }

  })


    export const allProductAdmin = catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find()
      // .sort({
      //   createdAt: -1,
      // });
      res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
    


  // Update Product --Admin

  export const updateAdminProduct = catchAsyncErrors (async(req,res,next)=>{
    try{
    let  product = await Product.findById(req.params.id);
    
    if(!product){
      return next (new ErrorHandler("Product not Found",404))
    }

    let images = [];
     
    if(typeof req.body.images === "string"){
      images.push(req.body.images)
    }  else {
      images = req.body.images;
    }

    if(images !== undefined){
      // Deleting images from cloudinary
      for(let i = 0; i < product.images.length; i++){
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
    req.body = imagesLinks;
  }

    product = await Product.findByIdAndUpdate(req.params.id,req.body)

     res.status(200).json({
      success:true,
      product,
     })

    } catch(error){
      return next (new ErrorHandler(error,400))
    }
  })




  export const productDetails = catchAsyncErrors(async(req,res,next)=>{
   try{
     const product = await Product.findById(req.params.id);

     if(!product){
      return next (new ErrorHandler("Product not found",404))
     }
     res.status(200).json({
      success:true,
      product
     })


   } catch(error){
    return next (new ErrorHandler(error,400))
   }
  })