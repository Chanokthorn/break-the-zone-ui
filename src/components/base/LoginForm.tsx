import React from "react";
import { useForm } from "react-hook-form";

export interface LoginFormProps {
  onSubmit: () => any;
}

export const LoginForm = (props: LoginFormProps) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div className="max-w-sm w-full">
      <form
        className="rounded shadow-lg px-8 pt-6 pb-8"
        onSubmit={handleSubmit(props.onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 test-sm font-bold mb-2">
            Username
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.username && "border-red-500"
            }`}
            name="username"
            ref={register({ required: true })}
            type="text"
            placeholder="username"
          ></input>
          {errors.username && (
            <p className="text-red-500 text-xs italic">* required</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 test-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && "border-red-500"
            }`}
            name="password"
            ref={register({ required: true })}
            type="text"
            placeholder="password"
          ></input>
          {errors.password && (
            <p className="text-red-500 text-xs italic">* required</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
          >
            Login
          </button>
          <p className="mx-auto">
            no account?{" "}
            <a href="" className="text-blue-700 hover:text-blue-500">
              sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
