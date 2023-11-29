import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: Data = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/user/${user?.email}`);
      return res.data;
    },
  });
  console.log(Data);
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="lg:max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 md:ml-32 gap-8 mt-14">
        {Data.map((data) => (
          <div key={data} className="card w-96 bg-base-200 shadow-xl">
            <figure>
              <img className="w-full h-[250px]" src={data.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Title: {data.title} </h2>
              <p>Teacher Name: {data.TeacherName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
