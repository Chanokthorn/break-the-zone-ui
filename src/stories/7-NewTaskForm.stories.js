import React from "react";
import { Button } from "@storybook/react/demo";
import { NewTaskForm } from "../components/base/NewTaskForm";

export default {
  title: "NewTaskForm",
  component: Button,
};

export const NewTaskFormStory = () => {
  const newTaskProps = {
    onSubmit: (data) => {
      console.log(data);
    },
  };
  return <NewTaskForm {...newTaskProps}></NewTaskForm>;
};
