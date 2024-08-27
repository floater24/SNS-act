import { weight, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
//最初のユーザー状態を定義
const initialState = {
  user: {
    _id: "66cc1fb6921f0463ba0ba0d3",
    username: "act君",
    email: "act@gmail.com",
    password: "123456",
    profilePicture: "/person/logo.png",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};
//状態にグローバルに管理
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
