import React from "react";

export interface LoginCardProps {}

export const LoginCard = (props: LoginCardProps) => {
  return (
    <div className="max-w-sm w-full">
      <form className="rounded shadow-lg px-8 pt-6 pb-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 test-sm font-bold mb-2"
            htmlFor="username"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 test-sm font-bold mb-2"
            htmlFor="password"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
          ></input>
        </div>
      </form>
    </div>
  );
};
