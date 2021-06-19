/* eslint-disable react-hooks/exhaustive-deps */
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { checkLogin } from "../../../utils/checkLogin";
import { getUserInfo } from "../../../utils/getUserInfo";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    groupId: "",
  });

  //ログイン時ユーザー情報を取得
  const setLoginUserInfo = () => {
    getUserInfo().then((res) => {
      setUserInfo({
        userId: res.userId,
        userName: res.userName,
        groupId: res.groupId,
      });

      //グループ紐付け完了済の方はログイン後、検索画面へ遷移
      if (res.groupId !== "" && res.groupId !== null) {
        Router.push("/search");

        //グループ紐付け未完了の場合
      } else {
        Router.push("/linkUserToGroup");
      }
    });
  };

  //リロード、URL直叩き時
  useEffect(() => {
    //ログインが必要な画面の場合
    if (
      router.asPath !== "/" &&
      router.asPath !== "/signup" &&
      router.asPath !== "/login"
    ) {
      //ログインチェック
      checkLogin().then((isLogin) => {
        if (isLogin) {
          //ログインユーザー情報を取得
          getUserInfo().then((res) => {
            setUserInfo({
              userId: res.userId,
              userName: res.userName,
              groupId: res.groupId,
            });
          });
        } else {
          //ログイン画面へ遷移
          Router.push("/login");
        }
      });
    }
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
