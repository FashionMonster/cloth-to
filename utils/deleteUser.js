import { fb } from "./firebase";

//ユーザーの削除
const deleteUser = () => {
  let user = fb.auth().currentUser;
  user.delete().catch((error) => {
    throw error;
  });
};

export { deleteUser };
