import axios from "axios";
import { fb } from "./firebase";

//ユーザー情報取得
export const getUserInfo = async () => {
  var userInfo = {};

  await loginData()
    .then((res) => {
      userInfo.userId = res;
    })
    .catch((e) => {
      userInfo.userId = "";
    });

  if (userInfo.userId !== "") {
    await getUserAccount(userInfo.userId)
      .then((res) => {
        userInfo.userName = res.userName;
        userInfo.groupId = res.groupId;
      })
      .catch((e) => {
        userInfo.userName = "";
        userInfo.groupId = "";
      });
  }

  return userInfo;
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

//ユーザー名、グループID取得
const getUserAccount = (param) => {
  const newAxios = axios.create({
    baseURL: window.location.protocol + "//" + window.location.host,
  });
  return new Promise((resolve) => {
    newAxios
      .get("./api/getUserInfo", {
        params: {
          email: param,
        },
      })
      .then((res) => {
        resolve(res.data);
      });
  });
};
