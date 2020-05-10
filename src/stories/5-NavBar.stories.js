import React from "react";
import { Button } from "@storybook/react/demo";
import { Navbar } from "../components/layout/Navbar";

export default {
  title: "NavBar",
  component: Button,
};

export const NavBarStory = () => {
  return <Navbar></Navbar>;
};
