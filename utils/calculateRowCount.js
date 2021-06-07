// 検索画面に表示する行数計算
const calculateRowCount = (dispalyCount, oneRowDisplayData) => {
  if (dispalyCount === 0) {
    return 0;
  } else if (dispalyCount <= oneRowDisplayData) {
    return 1;
  } else {
    return Math.ceil(dispalyCount / oneRowDisplayData);
  }
};

export { calculateRowCount };
