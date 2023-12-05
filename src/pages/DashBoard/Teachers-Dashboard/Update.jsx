import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate();
  const { _id, image, price, title, description } = data || {};
  console.log(data);

  const HandelAddProduct = (event) => {
    event.preventDefault();
    const from = event.target;
    const title = from.title.value;
    const price = from.price.value;
    const image = from.image.value;
    const description = from.description.value;

    const addUpdate = { title, price, description, image } || {};
    console.log(addUpdate);

    // form to database
    fetch(`http://localhost:5000/updated/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "SuccessFull",
            text: "Update successfully",
            confirmButtonText: "Ok",
          });
          navigate("/dashboard/myClass-teacher");
        }
      });
  };
  return (
    <div>
      <div className="mt-8 container mx-auto py-10">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-red-400 rounded-xl shadow-2xl  lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-white">
            Update your Class update
          </h1>

          <form onSubmit={HandelAddProduct} className="mt-6">
            <div className="flex gap-1">
              {/* product name */}
              <div className="flex-1 form-control ">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Title
                </label>
                <input
                  defaultValue={title}
                  name="title"
                  type="text"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              {/* choose the brand */}
              <div className="flex-1  form-control ">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Price
                </label>
                <input
                  defaultValue={price}
                  name="price"
                  type="text"
                  list="Brand"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="Brand"></datalist>
              </div>
            </div>

            <div className="flex gap-1">
              {/* Product Type */}
              <div className="flex-1 form-control 5">
                <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                  Description
                </label>
                <input
                  defaultValue={description}
                  name="description"
                  type="text"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="Product"></datalist>
              </div>
              {/* Product price */}
            </div>

            {/* photo url */}
            <div className="flex-1 form-control">
              <label className="block mb-2 text-xl font-bold text-white dark:text-gray-200">
                Image
              </label>
              <input
                defaultValue={image}
                name="image"
                type="text"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-blue-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex lg:flex-row-reverse flex-col-reverse justify-center lg:gap-10">
              <input
                className=" px-6 py-3 mt-6 text-lg font-bold hover:bg-black text-white btn bg-red-300"
                type="submit"
                value="Update The Class "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
