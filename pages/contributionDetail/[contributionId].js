import axios from "axios";
import Router, { useRouter } from "next/router";
import queryString from "query-string";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { BackBtn } from "../../components/common/button/backBtn";
import { Error } from "../../components/common/error";
import { Header } from "../../components/common/header";
import { Loading } from "../../components/common/loading/loading";
import { Navigation } from "../../components/common/navigation";
import { PreviewMainArea } from "../../components/common/preview/previewMainArea";
import { PreviewSubArea } from "../../components/common/preview/previewSubArea";
import ContributionForm from "../../components/pagecontribute/contributionForm";
import { checkLogin } from "../../utils/checkLogin";
import { downloadImage } from "../../utils/downloadImage";

//データフェッチ
async function fetchContributionDetail(router) {
  //リクエストデータ
  let reqData;

  //URL直叩きの場合 ※ToDo：router.query使えない
  if (router.query.contributionId === undefined) {
    const urlData = queryString.parseUrl(router.asPath, {
      parseFragmentIdentifier: true,
    });

    reqData = {
      contributionId: urlData.query.contributionId,
    };
    //通常の遷移
  } else {
    reqData = {
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

export default function ContributionId() {
  //ログインチェック実行
  checkLogin().then((isLogin) => {
    if (!isLogin) {
      Router.push("/login");
    }
  });

  const {
    handleSubmit,
    register,
    errors,
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const router = useRouter();
  const { isFetching, isLoading, error, data } = useQuery(
    ["contributionDetail", router.asPath],
    () => fetchContributionDetail(router)
  );

  if (isFetching || isLoading) return <Loading />;

  if (error) return <Error href="/search" errorMsg={error.message} />;

  return (
    <div>
      <body className="grid grid-rows-layout gap-8 min-h-screen relative">
        <div id="headerWrapper">
          <Header isLogined={true} />
          <Navigation />
        </div>
        <p className="text-center">
          投稿の詳細を確認できます。
          <br />
          新たなクリエイションに役立てることができるかもしれません。
        </p>
        <main className="grid grid-cols-main">
          <form
            onSubmit={handleSubmit()}
            className="col-start-2 col-end-3 grid grid-cols-2"
          >
            {/* ファイル選択(画面左) */}
            <div className="grid grid-rows-fileUpload gap-6">
              {/* メインイメージ */}
              <PreviewMainArea imgFileUrl={data.imgFileUrl[0]} />
              {/* サブイメージ */}
              <div className="grid grid-cols-previewSubArea gap-3">
                {(() => {
                  var previewSubArea = [];
                  for (let i = 1; i <= 4; i++) {
                    previewSubArea.push(
                      <PreviewSubArea imgFileUrl={data.imgFileUrl[i]} />
                    );
                  }
                  return previewSubArea;
                })()}
              </div>
            </div>
            {/* フォーム(画面右) */}
            <div className="grid grid-rows-contributeForm grid-cols-contributeForm gap-6">
              <ContributionForm
                register={register}
                errors={errors}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
                isDisabled={true}
                data={data}
              />
              <div className="flex justify-around">
                <BackBtn />
              </div>
            </div>
          </form>
        </main>
      </body>
    </div>
  );
}
