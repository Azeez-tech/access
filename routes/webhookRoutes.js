import express from "express";
import { paystackWebhook } from "../controllers/webhookControllers.js";

const webhookRouter = express.Router();

webhookRouter.post("/paystack", paystackWebhook);

export default webhookRouter;
