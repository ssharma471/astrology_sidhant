import Stripe from "stripe";

const stripe = new Stripe("sk_test_51QO3rYLFc1YLcRcDQR1tEJGH22j5yhj5VDpdTmH9rmxolRsHJN5Xs4OCavHSOLckyLWqZLHdmKY81Jf57Ptfo1bc00WgJCwP8w");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Astrology Service",
              },
              unit_amount: 5000, // Amount in cents (e.g., $50.00)
            },
            quantity: 1,
          },
        ],
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
