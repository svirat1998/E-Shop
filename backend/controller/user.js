

import express  from "express";
import User from "../model/user.js"
import cloudinary from "cloudinary";
import ErrorHandler from "../utils/ErrorHandler.js"
import catchAsyncErrors from "../middleware/catchAsyncErrors.js"
import jwt from "jsonwebtoken"
import sendToken from "../utils/jwtToken.js"


// create user

export const registerUser = catchAsyncErrors(async(req,res,next)=>{
  try{
   const {name,email,password,avatar} = req.body;
   const userEmail = await User.findOne({email});
   if(userEmail){
    return next(new ErrorHandler("User Already exists",404))
   }
   
       const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatars",
    });

    const user = {
      name:name,
      email:email,
      password:password,
      avatar:{
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
      }
    }

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try{
      await SendmailTransport({
        email:user.email,
        subject:"Activate your account",
        message:`Hello ${user.name} please click on the link to activation your account:
        ${activationUrl}`
      })
      res.status(201).json({
        success:true,
        message:`please check your email:- ${user.email} to activate your account!`,
      })
    } catch(error){
        return next(new ErrorHandler(error.message,500));
    } 

  } catch(error){
    return next(new ErrorHandler(error.message, 400));
  }
})

// create activation token
export const createActivationToken =(user)=>{
  return jwt.sign(user,process.env.ACTIVATION_SECRET,{
    expiresIn:"5m"
  })
}

export const activationUser = catchAsyncErrors(async(req,res,next)=>{
  try{
    const {activation_token} = req.body;
    const newUser = jwt.verify(
      activation_token,
      process.env.ACTIVATION_SECRET
    );
    if(!newUser){
      return next(new ErrorHandler("Invalid token", 400));
    }
    const {name,email,password,avatar} = newUser;
    let  user = await User.findOne({email});
    if(user){
      return next(new ErrorHandler("User already exists", 400));
    }
     user = await User.create({
      name,
      email,
      password,
      avatar,
     })
     sendToken(user,201,res)
  } catch(error){
    return next(new ErrorHandler(error.message,500))
  }
})

// login user

export const loginUser = catchAsyncErrors(async(req,res,next)=>{
  try{
     const {email,password} = req.body;
     if(!email || !password){
      return next(new ErrorHandler("Please provide the all fields!", 400));
     }
     const user = await User.findOne({email}).select("+password")
      
     if(!user){
      return next(new ErrorHandler("User doesn't exists!", 400));
     }
     const isPasswordMatched = await user.comparePassword(password);
     if(!isPasswordMatched){
      return next(new ErrorHandler("Please provide the correct information", 400))
     }
   sendToken(user,201,res)
  } catch(error){
    return next(new ErrorHandler(error.message,500))
  }
})


// load user
 
export const  getUser = catchAsyncErrors(async(req,res,next)=>{
  try{
     const user = await User.findById(req.user.id)
     if(!user){
        return next(new ErrorHandler("User doesn't exists", 400));
     }
     res.status(201).json({
      success:true,
      user
     })
  } catch(error){
    return next(new ErrorHandler(error.message,500))
  }
})


//logout

export const logoutUser = catchAsyncErrors(async(req,res,next)=>{
  try{
    res.cookie("token",null,{
      expires:new Date(Date.now()),
      httpOnly:true,
      sameSite:"none",
      secure:true,
    })
    res.status(200).json({
      success:true,
      message: "Log out successful!",
    })
  } catch(error){
    return next (new ErrorHandler(error,400))
  }
})


//update user info

export const updateUser = catchAsyncErrors(async(req,res,next)=>{
  try{
      const {email,password,phoneNumber,name} = req.body;

      const user = await User.findOne({email}).select("+password");

      if(!user){
        return next(new ErrorHandler("User not found", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if(!isPasswordValid){
        return next (new ErrorHandler("Please provide the correct information",400))
      }

      user.name = name;
      user.email = email;
      user.phoneNumber = phoneNumber;

      await user.save();

      res.status(201).json({
        success:true,
        user,
      })

  }catch(error){
    return next(new ErrorHandler(error,400))
  }
})

// update user withdraw methods 

export const userWithdraw = catchAsyncErrors(async(req,res,next)=>{
  try{
   const {withdrawMethod} =req.body;;

   const user = await Shop.findByIdAndUpdate(req.user._id,{
    withdrawMethod
   });
   res.status(201).json({
    success:true,
    user
   })

  }catch(error){
    return next(new ErrorHandler(error,400))
  }
})


// delete user withdraw merthods 

export const deleteUserWithdraw= catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorHandler("Seller not found with this id", 400));
    }

    user.withdrawMethod = null;

    await user.save();

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})







// update user avatar

export const updateUserAvatar = catchAsyncErrors(async(req,res,next)=>{
  try{
  let existsUser = await User.findById(req.user.id);
   
  if(req.body.avatar !==""){
    const imageId = existsUser.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);
   
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
      folder:"avatars",
      width:150
    });

    existsUser.avatar ={
      public_id:myCloud.public_id,
      url:myCloud.secure_url
    }
  }

  await existsUser.save();
  res.status(200).json({
    success:true,
    user:existsUser,
  })
  }catch(error){
    return next (new ErrorHandler(error,400))
  }
})



// update user addresses

export const updateAddress = catchAsyncErrors(async(req,res,next)=>{
  try{
   const user = await User.findById(req.user.id);

   const sameTypeAddress = user.addresses.find((address)=>address.addressType === req.body.addressType);

   if(sameTypeAddress){
    return next(new ErrorHandler(`${req.body.addressType}address already exists`))
   }

   const existsAddress = user.addresses.find((address)=>address._id === req.body._id)

   if(existsAddress){
    Object.assign(existsAddress,req,body)
   } else {
    // add the new address
    user.addresses.push(req.body)
   }
   await user.save();
   
   res.status(200).json({
    success:true,
    user
   })

  }catch(error){
    return next(new ErrorHandler(error,400))
  }
})


// delete user address

export const deleteUserAddress = catchAsyncErrors(async(req,res,next)=>{
  try{
  const userId = req.user._id
  const addressId = req.params.id;

  await User.updateOne(
    {
      _id:userId
    },
    {
      $pull:{addresses:{_id:addressId}}
    }
  )
    
  const user = await User.findById(userId);

  res.status(200).json({
    success:true,
    user
  })

  }catch(error){
    return next(new ErrorHandler(error,400))
  }
})