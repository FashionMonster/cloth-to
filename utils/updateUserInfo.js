import { fb } from "./firebase";

//ユーザー情報更新
const updateUserInfo = async (email, password) => {
  var user = fb.auth().currentUser;
  try {
    //メールアドレス(ID)更新
    await user.updateEmail(email);
    //パスワード更新
    await user.updatePassword(password);
  } catch (error) {
    throw error;
  }
};

export { updateUserInfo };
