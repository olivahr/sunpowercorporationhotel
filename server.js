import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();

// Stripe secret key DESDE VARIABLE DE ENTORNO
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Crear PaymentIntent
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Servidor
app.listen(3000, () => {
  console.log("Stripe server running on port 3000");
});