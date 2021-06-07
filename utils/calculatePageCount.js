// 検索画面のページ数の計算
const calculatePageCount = (totalCount, onePageDisplayData) => {
  if (totalCount === 0) {
    return 0;
  } else if (totalCount <= onePageDisplayData) {
    return 1;
  } else {
    return Math.ceil(totalCount / onePageDisplayData);
  }
};

export { calculatePageCount };
