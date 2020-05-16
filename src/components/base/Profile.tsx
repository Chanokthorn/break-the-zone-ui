import React from "react";
import { TaskCardProps } from "./TaskCard";

export interface StatsProps {
  sum: number;
  completed: number;
  stack: number;
}

export interface ProfileProps {
  img?: string;
  username: string;
  email?: string;
  stats?: StatsProps;
  tasks?: TaskCardProps[];
}

export const Profile = (props: ProfileProps) => {
  return (
    <div className="max-w-sm w-full rounded bg-white px-8 pt-6 pb-8">
      <div className="w-full h-20 text-center justify-center">
        <img
          className="h-16 w-16 rounded-full m-auto  "
          src={props.img}
          alt="profile"
        ></img>
      </div>
      <div className="w-full h-24">
        <p className="text-center">Username: {props.username}</p>
        <p className="text-center">E-mail: {props.email}</p>
        <p className="text-center">Score: {props.stats?.sum || "-"}</p>
        <p className="text-center">
          Completed: {props.stats?.completed || "-"}
        </p>
        <p className="text-center">Stack: {props.stats?.stack || "-"}</p>
      </div>
    </div>
  );
};
