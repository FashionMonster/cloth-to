const changePageNum = (pageNum, pathName, router) => {
  //選択した番号をページにセット
  router.query.page = pageNum;

  router.push({
    pathname: pathName,
    query: router.query,
  });
};

export { changePageNum };
