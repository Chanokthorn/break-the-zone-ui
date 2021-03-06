import React from "react";
import { Button } from "@storybook/react/demo";
import { Navbar } from "../components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "../components/context/UserProvider";

export default {
  title: "NavBar",
  component: Button,
};

export const NavBarStory = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar></Navbar>
      </Router>
    </UserProvider>
  );
};
