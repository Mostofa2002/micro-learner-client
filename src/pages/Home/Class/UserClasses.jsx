import { Link, useLoaderData } from "react-router-dom";

const UserClasses = () => {
  const data = useLoaderData();
  const Data = data.filter((item) => item.status === "accepted");

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
      {Data.map((data) => (
        <div key={data} className="card w-96 bg-base-200 shadow-xl">
          <figure>
            <img className="w-full h-[250px]" src={data.image} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title"> Title: {data.title} </h2>
            <p>Teacher Name : {data.name}</p>
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
  );
};

export default UserClasses;
