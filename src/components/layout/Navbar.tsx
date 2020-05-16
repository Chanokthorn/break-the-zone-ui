import React, { useCallback, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { UserContext } from "../context/UserProvider";

interface NavigatorItemProps {
  selected?: boolean;
  title: string;
  icon?: string;
  linkTo: any;
}

const NavItem: React.FC<NavigatorItemProps> = (props) => {
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
  const userContext = useContext(UserContext);
  const navItems: NavigatorItemProps[] = [
    {
      title: "Tasks",
      linkTo: "/content/tasks",
    },
    {
      title: "Profile",
      linkTo: "/content/profile",
    },
    {
      title: "Leaderboard",
      linkTo: "/content/leaderboard",
    },
  ];
  const [selected, setSelected] = useState(0);
  const selectItem = useCallback((i: number) => {
    setSelected(i);
  }, []);
  return (
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center ">
      <div className="w-full max-w-screen-xl relative mx-auto px-6 sm:px-0">
        <div className="w-full md:pl-6 lg:pl-6 xl:pl-6 md:pr-6 lg:pr-8 xl:pr-8 flex">
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
                <Link to={navItem.linkTo}>
                  <NavItem
                    {...navItem}
                    selected={idx === selected}
                    key={`nav-item-${navItem.title}`}
                  ></NavItem>
                </Link>
              </div>
            ))}
          </div>
          <div>
            {userContext.profile &&
              (userContext.profile.img ? (
                <img
                  className="h-8 w-8 rounded-full m-auto  "
                  src={userContext.profile?.img}
                  alt="profile"
                ></img>
              ) : (
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
