import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutPayment from "./CheckOutPayment";

const stripePromise = loadStripe(import.meta.env.VITE_PAY_API);
console.log(import.meta.env.VITE_PAY_API);

const Payment = () => {
  const { loading } = useAuth();
  const data = useLoaderData();
  //   console.log(data);
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-5xl text-center font-medium my-20">Pay here</div>
      <Elements stripe={stripePromise}>
        <CheckOutPayment data={data} />
      </Elements>
    </div>
  );
};

export default Payment;
