import React from "react";
import { useForm } from "react-hook-form";

export interface NewTaskFormProps {
  onSubmit: (value: any) => any;
}

export interface TaskFormProps {
  name: string;
  point: 0 | 1 | 2 | 3 | 4 | 5;
  description: string;
}

export const NewTaskForm: React.FC<NewTaskFormProps> = (props) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(props.onSubmit)}
      >
        <div className="flex flex-wrap px-3 -mx-3 mb-6">
          <div className="w-3/4 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Task name
            </label>
            <input
              name="name"
              type="text"
              ref={register({ required: true })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 -pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name && "border-red-500"
              }`}
            ></input>
            {errors.name && (
              <p className="text-red-500 text-xs italic">* required</p>
            )}
          </div>
          <div className="w-1/4 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Point
            </label>
            <div className="relative">
              <select
                name="point"
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
            {errors.point && (
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
              name="description"
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
