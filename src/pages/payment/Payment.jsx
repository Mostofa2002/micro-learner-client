import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="text-5xl text-center">pay here</div>
    </div>
  );
};

export default Payment;
