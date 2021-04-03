import { fb } from "./firebase";

const downloadImage = (fileName) => {
  var storageRef = fb.storage().ref();

  return new Promise(function (resolve) {
    storageRef
      .child(fileName)
      .getDownloadURL()
      .then(function (url) {
        resolve(url);
      });
    // .catch(function (error) {
    //   switch (error.code) {
    //     case "storage/object-not-found":
    //       // File doesn't exist
    //       break;
    //     case "storage/unauthorized":
    //       // User doesn't have permission to access the object
    //       break;
    //     case "storage/canceled":
    //       // User canceled the upload
    //       break;
    //     case "storage/unknown":
    //       // Unknown error occurred, inspect the server response
    //       break;
    //     default:
    //   }
    // });
  });
};

export { downloadImage };
