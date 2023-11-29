import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const HighClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data: Data = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/highlighted-class");
      return res.data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div data-aos="flip-right" className="my-14">
      <h1 className="text-center text-5xl font-bold">
        Our Most Enrolled Classes
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 md:ml-44  gap-10  mt-14">
        {Data.map((data) => (
          <div key={data} className="card w-96 bg-base-300 shadow-xl">
            <figure>
              <img className="w-full h-[250px]" src={data.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Title: {data.title} </h2>
              <p>Teacher Name: {data.name}</p>
              <p>Price: {data.price} $</p>
              <p> Short Description: {data.description}</p>
              <p> Total Enroll: {data.enroll}</p>
              <Link to={`/payment/${data._id}`}>
                <div className="card-actions justify-center mt-3">
                  <button className="btn btn-info text-white w-1/2">
                    Enroll Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighClass;
