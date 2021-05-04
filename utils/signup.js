import { fb } from "./firebase";

//新規ユーザー登録
const signup = async (email, password) => {
  try {
    await fb.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};

export { signup };
