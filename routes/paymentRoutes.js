import express from "express";
// import {
//   initializePayment,
//   verifyPayment,
// } from "../controllers/paymentControllers.js";

import {
  initiatePaymentWithBankTransfer,
  initiatePaymentWithApplePay,
  verifyPayment,
} from "../controllers/student.controllers.js";
import { studentAuth } from "../authentication/auth.js";

const paymentRouter = express.Router();

paymentRouter.post("/transfer", studentAuth, initiatePaymentWithBankTransfer);
paymentRouter.post("/apple", studentAuth, initiatePaymentWithApplePay);
paymentRouter.get("/verify/:reference", verifyPayment);

export default paymentRouter;
