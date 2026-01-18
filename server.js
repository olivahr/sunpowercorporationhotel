import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Stripe secret key desde variable de entorno
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Endpoint para crear PaymentIntent
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // en centavos
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Servir detalles y CSS directamente desde la raíz
app.get("/", (req, res) => {
  res.sendFile("details.html", { root: "." });
});
app.get("/style.css", (req, res) => {
  res.sendFile("style.css", { root: "." });
});

app.listen(port, () => {
  console.log(`Stripe server running on port ${port}`);
});
