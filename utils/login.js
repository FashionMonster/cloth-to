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
      throw error;
    });
};

export { login };
