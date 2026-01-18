import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Tu SECRET KEY de Stripe (nunca en GitHub)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Endpoint para crear Payment Intent
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body; // en centavos
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Stripe server running on port ${port}`);
});
