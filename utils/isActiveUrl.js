//アクティブなURL(現在表示しているページ)であるか判定する
const isActiveUrl = (href, currentUrl) => {
  if (href === currentUrl) {
    return true;
  } else {
    return false;
  }
};

export { isActiveUrl };
