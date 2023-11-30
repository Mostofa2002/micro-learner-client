import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutPayment = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [client, setClient] = useState("");
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  console.log(data);
  const { price, title, _id, name, image } = data;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://micro-server.vercel.app/payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClient(data?.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(client, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }

      // payment saved in database
      const payment = {
        image: image,
        id: _id,
        email: user?.email,
        name: user?.displayName,
        TeacherName: name,
        price: price,
        title: title,
        transactionId: paymentIntent.id,
      };

      const res = await axiosSecure.post("/payment-history", payment);
      console.log(res.data);

      if (res.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for payment",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard");
      }
    }
  };
  return (
    <div>
      <div className="text-3xl mb-10">
        <h1>Title : {title}</h1>
        <h1>Price : {price} $</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          disabled={!client}
          className="btn btn-sm text-white btn-success w-40 my-4"
          type="submit"
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            {" "}
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutPayment;
