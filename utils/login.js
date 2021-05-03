import Router from "next/router";
import { fb } from "./firebase";

//ログイン
const login = async (email, password) => {
  await fb
    .auth()
    .setPersistence(fb.auth.Auth.Persistence.SESSION)
    .then(() => {
      return fb.auth().signInWithEmailAndPassword(email, password);
    })
    .catch((error) => {
      alert(error.code);
      alert(error.message);
    });

  //ログイン後画面遷移
  Router.push("/search");
};

export { login };
