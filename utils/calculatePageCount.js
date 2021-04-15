// ページ数の計算
const calculatePageCount = (totalCount, onePageDisplayData) => {
  return Math.ceil(totalCount / onePageDisplayData);
};

export { calculatePageCount };
