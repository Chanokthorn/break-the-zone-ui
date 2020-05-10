import React, { useCallback, useState } from "react";
import logo from "../../images/logo.png";

interface NavigatorItemProps {
  selected?: boolean;
  title: string;
  icon?: string;
  linkTo?: any;
}

const NavItem: React.FC<NavigatorItemProps> = (props) => {
  console.log(props.title, props.selected);
  return (
    <div className="relative ml-2 mr-2 hover:text-gray-600 cursor-pointer">
      {props.icon ? <div className="mr-1">{props.icon}</div> : null}
      {props.selected ? (
        <div className="text-selected">{props.title}</div>
      ) : (
        <div>{props.title}</div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const navItems: NavigatorItemProps[] = [
    {
      title: "Current Tasks",
    },
    {
      title: "Profile",
    },
  ];
  const [selected, setSelected] = useState(0);
  const selectItem = useCallback((i: number) => {
    setSelected(i);
  }, []);
  return (
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center ">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="lg:w-1/2 xl:w-1/2 pl-6 pr-6 lg:pr-8 flex">
          <img
            src={logo}
            className="h-8 w-auto hover:opacity-75 cursor-pointer"
            alt="logo"
          ></img>
          <div className="flex flex-grow lg:w-3/4 xl:w-4/5 pl-6">
            {navItems.map((navItem, idx) => (
              <div
                onClick={() => selectItem(idx)}
                key={`nav-div-${navItem.title}`}
              >
                <NavItem
                  {...navItem}
                  selected={idx === selected}
                  key={`nav-item-${navItem.title}`}
                ></NavItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
