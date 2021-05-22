// ページ数の計算
const calculateRowCount = (dispalyCount, oneRowDisplayData) => {
  if (dispalyCount <= 5) {
    return 1;
  } else {
    return Math.ceil(dispalyCount / oneRowDisplayData);
  }
};

export { calculateRowCount };
