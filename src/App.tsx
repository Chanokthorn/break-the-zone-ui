import React from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage";
import { LeaderboardPage } from "./components/pages/LeaderboardPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { TasksPage } from "./components/pages/TasksPage";
import { DefaultLayout } from "./components/layout/DefaultLayout";

const routes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: null,
  },
  {
    path: "/content",
    component: DefaultLayout,
    routes: [
      {
        path: "/content/tasks",
        component: TasksPage,
      },
      {
        path: "/content/profile",
        component: ProfilePage,
      },
      {
        path: "/content/leaderboard",
        component: LeaderboardPage,
      },
    ],
  },
];

const RouteWithSubRoutes: React.FC<any> = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    ></Route>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
          ))}
          <Route path="*">404 Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
