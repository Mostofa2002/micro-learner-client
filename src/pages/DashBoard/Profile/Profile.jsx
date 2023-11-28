import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const Profile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: data = {} } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const res = await axiosSecure.get(`profile?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(data);
  return (
    <div className="flex justify-center items-center my-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-40" src={data.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name: {data.name}</h2>
          <p className="card-title">Email: {data.email}</p>
          <p className="card-title">Role: {data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
