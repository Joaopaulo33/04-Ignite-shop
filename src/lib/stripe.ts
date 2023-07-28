import Stripe from "stripe";
const stripeKey: string = process.env.STRIPE_SECRET_KEY ?? "";
export const stripe = new Stripe(stripeKey, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "Ignite Shop",
  },
});
