


import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

import Withdraw from "../model/withdraw.js";
import sendMail from "../utils/sendMail.js";
import User from "../model/user.js";


// create withdraw request --- only for seller

   export const createWithdraw=catchAsyncErrors(async (req, res, next) => {
    try {
      const { amount } = req.body;

      const data = {
        user: req.user,
        amount,
      };

      try {
        await sendMail({
          email: req.user.email,
          subject: "Withdraw Request",
          message: `Hello ${req.user.name}, Your withdraw request of ${amount}$ is processing. It will take 3days to 7days to processing! `,
        });
        res.status(201).json({
          success: true,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }

      const withdraw = await Withdraw.create(data);

      const user = await User.findById(req.user._id);

      user.availableBalance = user.availableBalance - amount;

      await user.save();

      res.status(201).json({
        success: true,
        withdraw,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })


// get all withdraws --- admnin


  export const getAllWithdraws= catchAsyncErrors(async (req, res, next) => {
    try {
      const withdraws = await Withdraw.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        withdraws,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })


// update withdraw request ---- admin

  export const updateWithdraw =catchAsyncErrors(async (req, res, next) => {
    try {
      const { userId } = req.body;

      const withdraw = await Withdraw.findByIdAndUpdate(
        req.params.id,
        {
          status: "succeed",
          updatedAt: Date.now(),
        },
        { new: true }
      );

      const user = await Shop.findById(userId);

      const transection = {
        _id: withdraw._id,
        amount: withdraw.amount,
        updatedAt: withdraw.updatedAt,
        status: withdraw.status,
      };

      user.transections = [...user.transections, transection];

      await user.save();

      try {
        await sendMail({
          email: user.email,
          subject: "Payment confirmation",
          message: `Hello ${user.name}, Your withdraw request of ${withdraw.amount}$ is on the way. Delivery time depends on your bank's rules it usually takes 3days to 7days.`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
      res.status(201).json({
        success: true,
        withdraw,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })










