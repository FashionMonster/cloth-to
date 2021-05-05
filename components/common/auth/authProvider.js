import React, { useState } from "react";
import { getUserInfo } from "../../../utils/getUserInfo";
import { usePreviousValue } from "../../../utils/usePreviousValue";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ userId: "", userName: "" });
  const previousUserId = usePreviousValue(userInfo.userId);

  //ログイン直後のみ、ユーザー情報を取得する
  if (previousUserId === "") {
    getUserInfo().then((res) => {
      setUserInfo({ userId: res.userId, userName: res.userName });
    });
  }

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
