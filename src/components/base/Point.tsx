import React from "react";

export interface PointProps {
  value: 0 | 1 | 2 | 3 | 4 | 5;
  lvl: string;
  size: string;
}

const getSize = (s: string) => {
  switch (s) {
    case "sm":
      return "8";
    case "md":
      return "16";
    case "lg":
      return "32";
    default:
      return "16";
  }
};
const getBorderSize = (s: string) => {
  switch (s) {
    case "sm":
      return "2";
    case "md":
      return "4";
    case "lg":
      return "8";
    default:
      return "4";
  }
};

export const Point = ({ value, lvl, size }: PointProps) => {
  return (
    <div
      className={`rounded-full 
      h-${getSize(size)} w-${getSize(size)} 
      flex items-center justify-center bg-lvl-${lvl}-primary 
      border-solid  border-lvl-${lvl}-secondary border-${getBorderSize(size)}
      text-white
      `}
    >
      {value}
    </div>
  );
};
