//拡張子が.jpg .jpeg .gif .pngであるか判定する
const isImageExt = (fileName) => {
  const allowExtensions = "(jpeg|jpg|png|gif)$";

  const index = fileName.lastIndexOf(".");
  const extension = fileName.slice(index + 1);

  if (extension.match(allowExtensions)) {
    return true;
  } else {
    return false;
  }
};

export { isImageExt };
