import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../../utils/getUserInfo";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ userId: "", userName: "" });

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo({ userId: res.userId, userName: res.userName });
    });
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
