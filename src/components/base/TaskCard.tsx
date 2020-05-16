import React, { useState } from "react";
import { Point, PointProps } from "./Point";

export interface TaskCardProps {
  id: number;
  name: string;
  point: 0 | 1 | 2 | 3 | 4 | 5;
  lvl: "new" | "regular" | "longer" | "extreme";
  detail: any;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  name,
  point,
  lvl,
  detail,
}: TaskCardProps) => {
  const pointProps: PointProps = {
    value: point,
    lvl: lvl,
    size: "sm",
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 mb-4 w-full">
      <div
        className={`max-w-sm rounded overflow-hidden shadow-lg p-2 bg-lvl-${lvl}-bg-primary hover:bg-lvl-${lvl}-bg-secondary flex flex-col justify-between mx-auto`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="max-w-sm border-b-1 flex flex-row text-lg">
          {name}
          <div className="flex-grow"></div>
          <Point {...pointProps}></Point>
        </div>
        {open ? (
          <p className={` text-base max-height-full`}>{detail}</p>
        ) : (
          <p className={`text-base max-height-1/4 truncate`}>{detail}</p>
        )}
      </div>
    </div>
  );
};

export interface TaskCardListProps {
  tasks: TaskCardProps[];
}

export const TaskCardList: React.FC<TaskCardListProps> = (props) => {
  return (
    <div className="w-full flex flex-col justify-cente items-center px-4">
      {props.tasks.map((task, i) => (
        <TaskCard {...task} key={`profile-task-card-${i}`}></TaskCard>
      ))}
    </div>
  );
};

export interface TaskCardTabsProps {
  tasks: TaskCardProps[];
  completedTasks: TaskCardProps[];
}

export const TaskCardTabs: React.FC<TaskCardTabsProps> = (props) => {
  const [selected, setSelected] = useState(0);
  const onSelect = (i: number) => {
    setSelected(i);
  };
  const taskCardListProps = { tasks: props.tasks };
  const completedTaskCardListProps = { tasks: props.completedTasks };
  return (
    <div className="w-full flex flex-col">
      <ul className="flex border-b">
        <li className={selected === 0 ? "-mb-px mr-1" : "mr-1"}>
          <div
            className={
              selected === 0
                ? "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            }
            onClick={() => onSelect(0)}
          >
            Current
          </div>
        </li>
        <li className={selected === 1 ? "-mb-px mr-1" : "mr-1"}>
          <div
            className={
              selected === 1
                ? "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            }
            onClick={() => onSelect(1)}
          >
            Completed
          </div>
        </li>
      </ul>
      {selected === 0 && <TaskCardList {...taskCardListProps}></TaskCardList>}
      {selected === 1 && (
        <TaskCardList {...completedTaskCardListProps}></TaskCardList>
      )}
    </div>
  );
};
