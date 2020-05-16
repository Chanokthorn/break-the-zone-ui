import React, { useState, useContext, useEffect } from "react";
import { Profile } from "../base/Profile";
import {
  TaskCardTabs,
  TaskCardTabsProps,
  TaskCardProps,
} from "../base/TaskCard";
import { UserContext } from "../context/UserProvider";
import { GetTasks } from "../../api/index";

export const ProfilePage: React.FC = () => {
  const userContext = useContext(UserContext);
  const initialTasks: TaskCardProps[] = [];
  const [tasks, setTasks] = useState(initialTasks);
  const [completedTasks, setCompletedTasks] = useState(initialTasks);
  const updateTasks = async (username: string) => {
    const newTasks: TaskCardProps[] = await GetTasks(username);
    setTasks(newTasks);
  };
  const updateCompletedTasks = async (username: string) => {
    const newTasks: TaskCardProps[] = await GetTasks(username);
    setCompletedTasks(newTasks);
  };
  useEffect(() => {
    if (!userContext.profile) {
      return;
    }
    updateTasks(userContext.profile.username);
    updateCompletedTasks(userContext.profile.username);
  }, [userContext.profile]);
  const taskCardTabsProps: TaskCardTabsProps = {
    tasks,
    completedTasks,
  };
  return (
    <div>
      {userContext.profile && (
        <div className="w-full flex flex-col">
          <Profile {...userContext.profile}></Profile>
          <TaskCardTabs {...taskCardTabsProps}></TaskCardTabs>
        </div>
      )}
    </div>
  );
};
