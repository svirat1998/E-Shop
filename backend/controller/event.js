
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Event from "../model/event.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "cloudinary";

// create event

    
  export const  createEvent = catchAsyncErrors(async(req,res,next)=>{
    try{

      let images = [];

      if(typeof req.body.images === "string"){
       images.push(req.body.images);
       } else {
        images = req.body.images;
       }

       const imagesLinks = [];

       for(let i =0 ;i < images.length;i++){
      const result = await cloudinary.v2.uploader.upload(images[i],{
        folder:"products"
      });

      imagesLinks.push({
        public_id:result.public_id,
        url:result.secure_url,
      });
       }
       const productData = req.body;
       productData.images = imagesLinks;

         const event = await Event.create(productData);

        res.status(201).json({
          success: true,
          event,
        });
    
    }catch(error){
      return next (new ErrorHandler(error,400))
    }
  })
  

// get all events
     export const getAllEvent=async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(201).json({
      success: true,
      events,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
     }

// get all events of a shop

     export const getAllEventId =catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.findById(req.params.id );

      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })

// delete event of a admin

    export const deleteEvent  =catchAsyncErrors(async (req, res, next) => {
    try {
      const event = await Event.findByIdAndDelete(req.params.id);
      if(!event){
        return next (new ErrorHandler("event not found",404))
      }

      
     
      await event.remove();

      res.status(201).json({
        success: true,
        message: "Event Deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })

// all events --- for admin

     export const getAllEventAdmin= catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })










