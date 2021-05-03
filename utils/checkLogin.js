import { fb } from "./firebase";

//ログインチェック
const checkLogin = () => {
  return new Promise((resolve) => {
    fb.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export { checkLogin };
