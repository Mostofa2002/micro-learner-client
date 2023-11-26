import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const TeachOnMicro = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const request = {
      name: name,
      email: email,
      image: image,
      title: data.title,
      category: data.category,
      experience: data.experience,
      status: "pending",
    };
    console.log(request);
    const join = await axiosSecure.post("/request-teacher", request);
    console.log(join.data);
    if (join.data.insertedId) {
      // show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "request success",
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
        {/* experience */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Experience</span>
          </label>
          <select
            defaultValue="default"
            {...register("experience", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select your experience level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        {/* category */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            defaultValue="default"
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select your category
            </option>
            <option value="web development">Web development</option>
            <option value="digital marketing">Digital marketing</option>
            <option value="graphics design">Graphics design</option>
            <option value="language">Programming</option>
            <option value="Ai">Machine learning</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Submit for reviews
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeachOnMicro;
