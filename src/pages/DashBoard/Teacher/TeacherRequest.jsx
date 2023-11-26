import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Cancel, CheckCircle } from "@mui/icons-material";

const TeacherRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: data = [] } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requests");
      return res.data;
    },
  });
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Title</th>
              <th>Category</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.experience}</td>
                <td>{data.status}</td>
                <th>
                  <button className="btn btn-success btn-sm">
                    <CheckCircle className="text-lg text-white"></CheckCircle>
                  </button>
                </th>
                <th>
                  <button className="btn btn-error btn-sm">
                    <Cancel className="text-lg text-white"></Cancel>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherRequest;
