import Router from "next/router";
import { fb } from "./firebase";

//ログアウト
const logout = async () => {
  await fb
    .auth()
    .signOut()
    .catch((error) => {
      alert(error);
      // throw error;
    });

  //ログアウト後画面遷移
  Router.push("/login");
};

export { logout };
