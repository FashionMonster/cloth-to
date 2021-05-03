import Router from "next/router";
import { fb } from "./firebase";

//新規ユーザー登録
const signup = async (email, password) => {
  try {
    await fb.auth().createUserWithEmailAndPassword(email, password);
    Router.push("/login");
  } catch (error) {
    alert(error);
  }
};

export { signup };
