import axios from "axios";
import { fb } from "./firebase";

//ユーザー情報取得
export const getUserInfo = async () => {
  var email = "";
  var userName = "";

  await loginData()
    .then((res) => {
      email = res;
    })
    .catch((e) => {
      email = "";
    });

  if (email !== "") {
    await getUserName(email)
      .then((res) => {
        userName = res;
      })
      .catch((e) => {
        userName = "";
      });
  }

  return { userId: email, userName: userName };
};

//メールアドレス(ID)取得
const loginData = () => {
  return new Promise((resolve) => {
    fb.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        resolve(user.email);
      } else {
        resolve("");
      }
    });
  });
};

//ユーザー名取得
const getUserName = (param) => {
  return new Promise((resolve) => {
    axios
      .get("./api/getUserInfo", {
        params: {
          email: param,
        },
      })
      .then((res) => {
        resolve(res.data.userName);
      });
  });
};
