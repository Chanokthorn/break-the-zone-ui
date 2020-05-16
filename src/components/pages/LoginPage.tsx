import React, { useCallback, useContext } from "react";
import logo from "../../images/logo.png";
import { LoginForm, LoginFormProps } from "../base/LoginForm";
import { UserContext } from "../context/UserProvider";

export const LoginPage: React.FC = () => {
  const userContext = useContext(UserContext);
  const onSubmit = useCallback((value: any) => {
    userContext.signIn(value);
  }, []);
  const loginFormProps: LoginFormProps = {
    onSubmit: onSubmit,
  };
  return (
    <div className="w-full h-full flex flex-col -my-3">
      <div className="justify-center">
        <img
          src={logo}
          className="w-48 md:w-64 lg:w-64 mx-auto"
          alt="logo"
        ></img>
      </div>
      <div className="flex items-center">
        <div className="mx-auto">
          <LoginForm {...loginFormProps}></LoginForm>
        </div>
      </div>
    </div>
  );
};
