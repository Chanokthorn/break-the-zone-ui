import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { UserProvider } from "../context/UserProvider";

export const DefaultLayout: React.FC<any> = (props: any) => {
  return (
    <UserProvider>
      <Router>
        <Navbar></Navbar>
        <div className="w-full max-w-screen-xl mx-auto px-6">
          <div className="pt-16 min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-2/4 xl:w-3/5 mx-auto overflow-x-hidden">
            <Switch>
              {props.routes.map((route: any, i: number) => (
                <Route
                  path={route.path}
                  key={`default-layout-route-${i}`}
                  component={route.component}
                ></Route>
              ))}
              <Route path="*">404 Page Not Found</Route>
            </Switch>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};
