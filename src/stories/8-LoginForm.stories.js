// import React from "react";
// import { Button } from "@storybook/react/demo";
// import { LoginPage } from "../components/base/LoginForm";
// import { UserProvider } from "../components/context/UserProvider";

// export default {
//   title: "LoginPage",
//   component: Button,
// };

// export const LoginPageStory = () => {
//   return (
//     <UserProvider>
//       <LoginPage></LoginPage>
//     </UserProvider>
//   );
// };

import React from "react";
import { Button } from "@storybook/react/demo";
import { LoginForm } from "../components/base/LoginForm";

export default {
  title: "LoginForm",
  component: Button,
};

export const LoginFormStory = () => {
  const newTaskProps = {
    onSubmit: (data) => {
      console.log(data);
    },
  };
  return <LoginForm {...newTaskProps}></LoginForm>;
};
