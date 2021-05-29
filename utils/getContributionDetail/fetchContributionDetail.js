import axios from "axios";
import queryString from "query-string";
import { downloadImage } from "../downloadImage";

//データフェッチ
async function fetchContributionDetail(router, userInfo) {
  //リクエストデータ
  let reqData;

  //URL直叩きの場合
  if (router.query.contributionId === undefined) {
    const urlData = queryString.parseUrl(router.asPath, {
      parseFragmentIdentifier: true,
    });

    reqData = {
      groupId: userInfo.groupId,
      userId: userInfo.userId,
      contributionId: urlData.query.contributionId,
    };
    //通常の遷移
  } else {
    reqData = {
      groupId: userInfo.groupId,
      userId: userInfo.userId,
      contributionId: router.query.contributionId,
    };
  }

  const { data } = await axios.get("../api/getContributionDetail", {
    params: reqData,
  });

  //downloadUrlを取得、dataにセットする
  var imgFileUrlArray = [];
  for (let res of data.imageUrl) {
    if (res !== null) {
      const src = await downloadImage(res);
      imgFileUrlArray.push(src);
    } else {
      imgFileUrlArray.push("");
    }
  }
  data.imgFileUrl = imgFileUrlArray;

  return data;
}

export { fetchContributionDetail };
