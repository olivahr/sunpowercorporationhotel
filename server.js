import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // La clave secreta va en Environment Variable

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.resolve('./')));

// Endpoint para recibir pagos desde la web
app.post("/pay", async (req, res) => {
  const { token, amount, name, empid, checkin } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: token,
      confirm: true,
      description: `SunPower Hotel Booking - ${name} (${empid})`,
    });
    res.json({ success: true, paymentIntent });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Stripe server running on port ${PORT}`);
});
