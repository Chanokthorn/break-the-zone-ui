import React from "react";
import { Button } from "@storybook/react/demo";
import { TasksPage } from "../components/pages/TasksPage";
import { UserProvider } from "../components/context/UserProvider";

export default {
  title: "TasksPage",
  component: Button,
};

export const TaskPageStory = () => {
  return (
    <UserProvider>
      <TasksPage></TasksPage>
    </UserProvider>
  );
};
