import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { NewTaskForm } from "../components/base/NewTaskForm";

export default {
  title: "NewTaskForm",
  component: Button,
};

export const NewTaskFormStory = () => {
  return <NewTaskForm></NewTaskForm>;
};
