import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../../utils/getUserInfo";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ userId: "", userName: "" });

  //ログイン時ユーザー情報を取得
  const setLoginUserInfo = () => {
    getUserInfo().then((res) => {
      setUserInfo({ userId: res.userId, userName: res.userName });
    });
  };

  //リロード、URL直叩き時
  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo({ userId: res.userId, userName: res.userName });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ userInfo: userInfo, setLoginUserInfo: setLoginUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
