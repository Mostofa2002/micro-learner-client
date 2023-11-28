import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import useAuth from "../../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
const Update = () => {
  const data = useLoaderData();
  const { _id } = data;
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const update = {
      image: data.photo,
      title: data.title,
      price: data.price,
      description: data.description,
    };
    console.log(update);

    fetch(`http://localhost:5000/updated-class/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Classes Update Successfully",
            icon: "success",
            confirmButtonText: "Done",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard/myClass-teacher");
            }
          });
        }
      });
  };
  return (
    <div>
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
              defaultValue={data.title}
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
              defaultValue={data.price}
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
              defaultValue={data.description}
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
              defaultValue={data.image}
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
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
