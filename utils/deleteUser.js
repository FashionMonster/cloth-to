import { fb } from "./firebase";

//ユーザーの削除
const deleteUser = () => {
  var user = fb.auth().currentUser;
  user.delete().catch((error) => {
    console.log(error);
  });
};

export { deleteUser };
