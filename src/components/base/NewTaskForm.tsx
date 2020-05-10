import React from "react";
import { useForm } from "react-hook-form";

export interface NewTaskFormProps {
  onSubmit: () => any;
}

export const NewTaskForm: React.FC<NewTaskFormProps> = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap px-3 -mx-3 mb-6">
          <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Task name
            </label>
            <input
              name="Name"
              type="text"
              ref={register({ required: true })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 -pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.Name && "border-red-500"
              }`}
            ></input>
            {errors.Name && (
              <p className="text-red-500 text-xs italic">* required</p>
            )}
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Point
            </label>
            <div className="relative">
              <select
                name="Point"
                ref={register}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.Point && (
              <p className="text-red-500 text-xs italic"> * required</p>
            )}
            <div className="flex items-center justify-between"></div>
          </div>
        </div>
        <div className="flex flex-wrap px-3 -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              name="Description"
              rows={5}
              ref={register}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
        </div>
        <div>
          <div className="flex">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="submit"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
