import Router from "next/router";
import React from "react";
import { fb } from "../../../utils/firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const login = async (email, password) => {
    await fb
      .auth()
      .setPersistence(fb.auth.Auth.Persistence.SESSION)
      .then(() => {
        return fb.auth().signInWithEmailAndPassword(email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.code);
        alert(error.message);
      });

    Router.push("/search");
  };

  //新規ユーザー登録
  const signup = async (email, password) => {
    try {
      await fb.auth().createUserWithEmailAndPassword(email, password);
      Router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流す
    <AuthContext.Provider
      value={{
        login: login,
        signup: signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider, fb };
