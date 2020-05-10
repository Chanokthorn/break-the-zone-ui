import React from "react";
import { Button } from "@storybook/react/demo";
import { CardSimple } from "../components/base/CardSimple";
import { Point } from "../components/base/Point";
import "../assets/main.css";

export default {
  title: "CardContent",
  component: Button,
};

export const CardContent = () => {
  const cardProps = {
    header: "The Coldest Sunset",
    imgURL: "https://picsum.photos/200/100",
    imgURLAlt: "Sunset in the mountains",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ["#photography", "#travel", "#winter"],
  };
  const pointProps = {
    value: 20,
    lvl: "new",
    size: "sm",
  };
  return (
    <div>
      <CardSimple {...cardProps}></CardSimple>
      <Point {...pointProps}></Point>
    </div>
  );
};
