import { Link, useLoaderData } from "react-router-dom";

const UserClasses = () => {
  const data = useLoaderData();
  const Data = data.filter((item) => item.status === "accepted");

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {Data.map((data) => (
        <div key={data} className="card w-96 bg-base-200 shadow-xl">
          <figure>
            <img className="w-full h-[250px]" src={data.image} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title"> Title: {data.title} $</h2>
            <p>Name: {data.name}</p>
            <p>Price: {data.price}</p>
            <p> Short Description: {data.description}</p>
            <Link to={`/payment/${data._id}`}>
              <div className="card-actions justify-center mt-3">
                <button className="btn btn-primary w-1/2">Enroll</button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserClasses;
