import axios from "axios";
import queryString from "query-string";
import { downloadImage } from "../downloadImage";
import { getUserInfo } from "../getUserInfo";

//検索条件を元に投稿情報を取得する
const fetchContributions = async (apiPath, router, userInfo) => {
  //リクエストデータ
  let reqData;

  //URL直叩きの場合
  if (router.query.page === undefined) {
    //usecontext()のデータ取得はフェッチ後になるので、以下で再取得
    const userInfo = await getUserInfo();

    const urlData = queryString.parseUrl(router.asPath, {
      parseFragmentIdentifier: true,
    });

    reqData = {
      page: urlData.query.page,
      groupId: userInfo.groupId,
      userId: userInfo.userId,
      searchCategory: urlData.query.searchCategory,
      keyword: urlData.query.keyword,
      compositionRatio: urlData.query.compositionRatio,
      compareCondition: urlData.query.compareCondition,
    };
    //通常の遷移
  } else {
    reqData = {
      page: router.query.page,
      groupId: userInfo.groupId,
      userId: userInfo.userId,
      searchCategory: router.query.searchCategory,
      keyword: router.query.keyword,
      compositionRatio: router.query.compositionRatio,
      compareCondition: router.query.compareCondition,
    };
  }

  const { data } = await axios
    .get(apiPath, {
      params: reqData,
    })
    .catch((error) => {
      throw error;
    });

  //downloadUrlを取得、dataにセットする
  if (data.totalCount > 0) {
    for (let res of data.images) {
      const src = await downloadImage(res.imageUrl).catch((errMsg) => {
        throw new Error(errMsg);
      });
      res.src = src;
    }
  }
  return data;
};

export { fetchContributions };
