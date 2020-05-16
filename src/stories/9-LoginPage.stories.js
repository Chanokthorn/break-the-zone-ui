import React from "react";
import { Button } from "@storybook/react/demo";
import { LoginPage } from "../components/pages/LoginPage";
import { UserProvider } from "../components/context/UserProvider";

export default {
  title: "LoginPage",
  component: Button,
};

export const LoginPageStory = () => {
  return (
    <UserProvider>
      <LoginPage></LoginPage>
    </UserProvider>
  );
};
