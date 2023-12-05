import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { DeleteForever, UpdateTwoTone } from "@mui/icons-material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["data", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/updated-class/${user.email}`);
      return res.data;
    },
  });
  // console.log(data);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/class-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Class has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
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
                  <td>{data.email}</td>
                  <td>{data.title}</td>
                  <td>{data.price} $</td>
                  <td>{data.description}</td>
                  <td>{data.status}</td>
                  <th>
                    <Link to={`/dashboard/update/${data._id}`}>
                      <button className="btn btn-success btn-sm">
                        <UpdateTwoTone className="text-lg text-white"></UpdateTwoTone>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-error btn-sm"
                    >
                      <DeleteForever className="text-lg text-white"></DeleteForever>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
