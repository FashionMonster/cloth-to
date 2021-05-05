import React, { useState } from "react";
import { getUserInfo } from "../../../utils/getUserInfo";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ userId: "", userName: "" });

  //ログインしたユーザー情報を取得
  const setLoginUserInfo = () => {
    getUserInfo().then((res) => {
      setUserInfo({ userId: res.userId, userName: res.userName });
    });
  };

  return (
    <AuthContext.Provider
      value={{ userInfo: userInfo, setLoginUserInfo: setLoginUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
