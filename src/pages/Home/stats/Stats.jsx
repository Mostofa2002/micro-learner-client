import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Stats = () => {
  const axiosPublic = useAxiosPublic();
  const { data: stats = [], isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/state");
      return res.data;
    },
  });
  console.log(stats);
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div data-aos="flip-right" className="my-10">
      <div className="stat-title text-5xl font-bold text-center uppercase">
        Website Stats
      </div>

      <div className="flex  justify-center items-center my-10">
        <div className="stats shadow ">
          <div className="stat place-items-center">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{stats.user}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Classes</div>
            <div className="stat-value text-secondary">{stats.totalClass}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Enroll</div>
            <div className="stat-value">{stats.totalEnroll}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
