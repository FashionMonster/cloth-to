import { nanoid } from "nanoid";
import { fb } from "./firebase";

//FireBase Storageに画像アップロード
const uploadImage = (imgFile) => {
  let idList = [];
  for (const file of imgFile) {
    const id = nanoid();
    idList.push(id);
    let storageRef = fb.storage().ref(id);
    storageRef.put(file.imgFileBlob);
  }
  return idList;
};

export { uploadImage };
