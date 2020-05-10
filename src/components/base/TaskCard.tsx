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
    <div className="mr-2 ml-2 mt-4 mb-4">
      <div
        className={`max-w-sm rounded overflow-hidden shadow-lg p-2 bg-lvl-${lvl}-bg-primary hover:bg-lvl-${lvl}-bg-secondary flex flex-col justify-between`}
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
