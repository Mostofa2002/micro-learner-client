import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutPayment from "./CheckOutPayment";
const stripePromise = loadStripe(
  "pk_test_51OHVkoKz9GeGBed5JgT22ILGoL1zPRcs6KAkrWwn0D7qNhuY7lW0aESImtDPZ3XSQe99kECl0nS8Iy6gdIXASy6o002y4hje0E"
);
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
