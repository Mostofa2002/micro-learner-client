// import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const {
  //   data: users = {},
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users-neww/${user?.email}`);
  //     return res.data;
  //   },
  // });
  const users = true;
  console.log(users);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const add = {
      name: name,
      email: email,
      image: data.photo,
      title: data.title,
      price: data.price,
      description: data.description,
      status: "pending",
      enroll: 0,
    };
    console.log(add);
    const join = await axiosSecure.post("/add-class", add);
    console.log(join.data);
    if (join.data.insertedId) {
      // show success popup
      // refetch();
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "add Class success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            defaultValue={user?.displayName}
            readOnly
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Email
          </label>
          <input
            type="text"
            {...register("email", { required: true })}
            name="email"
            defaultValue={user?.email}
            readOnly
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            name="title"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            price
          </label>
          <input
            type="text"
            {...register("price", { required: true })}
            name="price"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <span className="text-red-600">Price is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            description
          </label>
          <input
            type="text"
            {...register("description", { required: true })}
            name="description"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <span className="text-red-600">Description is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            Photo
          </label>
          <input
            type="text"
            {...register("photo", { required: true })}
            name="photo"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.name && (
            <span className="text-red-600">Photo is required</span>
          )}
        </div>

        {/* btn section */}
        <div className="mt-6">
          {users.status === "pending" ? (
            <button
              disabled={users.status === "pending"}
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Your request Pending
            </button>
          ) : users.status === "rejected" ? (
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
              Again Submit
            </button>
          ) : (
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-800 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
            >
              Submit for Review
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddClass;
