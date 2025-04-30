import axios from "axios";
import express from "express";

const app = express();

// app.get("/pay", async (req, res) => {
//   try {
//     const payload = {
//       tx_ref: "tx-" + Date.now(),
//       amount: 5000,
//       currency: "NGN",
//       redirect_url: "https://yourdomain.com/callback", // Change this to your actual URL
//       payment_options: "card",
//       customer: {
//         email: "customer@example.com",
//         name: "Customer Name",
//       },
//       customizations: {
//         title: "My App",
//         description: "Payment for access",
//       },
//     };

// const response = await axios.post(
//   "https://api.flutterwave.com/v3/payments",
//   payload,
//   {
//     headers: {
//       Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
//       "Content-Type": "application/json",
//     },
//   }
// );

// res.json(response.data);

//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ message: "Payment initiation failed" });
//   }
// });
