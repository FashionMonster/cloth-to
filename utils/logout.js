import Router from "next/router";
import { fb } from "./firebase";

//ログアウト
const logout = async () => {
  await fb
    .auth()
    .signOut()
    .then(() => {
      //ログアウト後画面遷移
      Router.push("/login");
    })
    .catch((error) => {
      throw error;
    });
};

export { logout };
