import React, { useCallback } from "react";
import { TaskCardProps, TaskCard } from "./TaskCard";

export interface ProfileProps {
  img: string;
  username: string;
  email: string;
  tasks: TaskCardProps[];
}

export const Profile = (props: ProfileProps) => {
  const getScore = useCallback(() => {
    let sum = 0;
    props.tasks.forEach((task) => {
      sum += task.point;
    });
    return sum;
  }, [props.tasks]);
  return (
    <div className="max-w-sm w-full border-gray-400 rounded bg-white shadow-lg px-8 pt-6 pb-8">
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
        <p className="text-center">Score: {getScore()}</p>
      </div>
      <div className="w-full flex flex-col">
        {props.tasks.map((task, i) => (
          <TaskCard {...task} key={`profile-task-card-${i}`}></TaskCard>
        ))}
      </div>
    </div>
  );
};
