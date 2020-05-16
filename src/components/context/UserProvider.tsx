import React, { useState, useCallback, useEffect } from "react";
import { UpdateUserProfile } from "../../api/index";
import { ProfileProps } from "../base/Profile";

export interface UserState {
  isLoggedIn: boolean;
  token?: string;
  profile?: ProfileProps;
}

export interface SignInProps {
  username: string;
  password: string;
}

export interface UserContextValue extends UserState {
  updateProfile: () => Promise<void>;
  signIn: (input: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
}

const UserContext = React.createContext<UserContextValue>({
  isLoggedIn: false,
  updateProfile: async () => {},
  signIn: async (input: SignInProps) => {},
  signOut: async () => {},
});

const UserProvider: React.FC<any> = (props) => {
  const profile: ProfileProps = {
    username: "",
    img: "",
    tasks: [],
  };
  const [userState, setUserState] = useState({
    isLoggedIn: false,
    profile,
    token: "",
  });
  const updateProfile = async () => {
    const userProfile = await UpdateUserProfile(userState.token);
    setUserState({ ...userState, profile: userProfile });
  };
  const signIn = useCallback(async (value) => {
    console.log("signIn:", value);
  }, []);
  const signOut = useCallback(async () => {
    setUserState({
      token: "",
      isLoggedIn: false,
      profile: {
        username: "",
        img: "",
        tasks: [],
      },
    });
  }, []);
  useEffect(() => {
    updateProfile();
  });
  return (
    <UserContext.Provider
      value={{
        profile: userState.profile,
        isLoggedIn: userState.isLoggedIn,
        updateProfile,
        signIn,
        signOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
