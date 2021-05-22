/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
import Router, { useRouter } from "next/router";
import queryString from "query-string";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { useQuery, useQueryClient } from "react-query";
import { AuthContext } from "../components/common/auth/authProvider";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Error } from "../components/common/error";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { Loading } from "../components/common/loading/loading";
import { Navigation } from "../components/common/navigation";
import { SearchInput } from "../components/pageSearch/searchInput";
import { SearchResult } from "../components/pageSearch/searchResult";
import { SelectCategory } from "../components/pageSearch/selectCategory";
import { CONST } from "../constants/const";
import { calculatePageCount } from "../utils/calculatePageCount";
import { calculateRowCount } from "../utils/calculateRowCount";
import { checkLogin } from "../utils/checkLogin";
import { downloadImage } from "../utils/downloadImage";
import { nvl } from "../utils/nvl";
//データフェッチ
async function fetchContributions(router, groupId) {
  //リクエストデータ
  let reqData;

  //URL直叩きの場合
  if (router.query.page === undefined) {
    const urlData = queryString.parseUrl(router.asPath, {
      parseFragmentIdentifier: true,
    });

    reqData = {
      page: urlData.query.page,
      groupId: urlData.query.groupId,
      searchCategory: urlData.query.searchCategory,
      keyword: urlData.query.keyword,
      compositionRatio: urlData.query.compositionRatio,
      compareCondition: urlData.query.compareCondition,
    };
    //通常の遷移
  } else {
    reqData = {
      page: router.query.page,
      groupId: groupId,
      searchCategory: router.query.searchCategory,
      keyword: router.query.keyword,
      compositionRatio: router.query.compositionRatio,
      compareCondition: router.query.compareCondition,
    };
  }

  const { data } = await axios.get("./api/getContribution", {
    params: reqData,
  });

  //downloadUrlを取得、dataにセットする
  if (data.totalCount > 0) {
    for (let res of data.images) {
      const src = await downloadImage(res.imageUrl);
      res.src = src;
    }
  }
  return data;
}

export default function Search() {
  //ログインチェック実行
  checkLogin().then((isLogin) => {
    if (!isLogin) {
      Router.push("/login");
    }
  });

  const router = useRouter();
  const value = useContext(AuthContext);
  const { handleSubmit, register, errors } = useForm();
  const [category, setCategory] = useState("1");
  const queryClient = useQueryClient();
  const { isFetching, isLoading, error, data } = useQuery(
    ["searchPath", router.asPath],
    () => fetchContributions(router, value.userInfo.groupId)
  );

  //検索処理
  const submit = (data) => {
    //初期化
    document.getElementById("searchCategory").options[0].selected = true;
    setCategory("1");

    //キャッシュキーを更新⇒検索内容が同じでも再fetchする
    queryClient.invalidateQueries("searchPath");

    //クエリパラメータをセット
    router.push({
      pathname: "/search",
      query: {
        page: 1,
        groupId: value.userInfo.groupId,
        searchCategory: data.searchCategory,
        keyword: data.keyword,
        compositionRatio: nvl(data.compositionRatio),
        compareCondition: nvl(data.compareCondition),
      },
    });
  };

  //ページ番号クリック
  const changePageNum = (pageNum) => {
    //クエリパラメータをセット
    router.push({
      pathname: "/search",
      query: {
        page: pageNum,
        groupId: value.userInfo.groupId,
        searchCategory: router.query.searchCategory,
        keyword: router.query.keyword,
        compositionRatio: router.query.compositionRatio,
        compareCondition: router.query.compareCondition,
      },
    });
  };

  //ページネーションの両端アイコン
  const arrowIcon = (icon, pageNum) => {
    //初期表示 又は ページが存在しない場合
    if (pageNum === 0 || data.totalCount === 0) {
      return <></>;
    }

    let changedPageNum;
    if (icon === "<") {
      changedPageNum = pageNum - 1;
    } else if (icon === ">") {
      changedPageNum = pageNum + 1;
    }

    return (
      <div
        onClick={() => changePageNum(changedPageNum)}
        className="w-7 h-7 bg-purple-200 mx-2 text-center rounded-3xl font-semibold hover:bg-purple-600 hover:text-white"
      >
        {icon}
      </div>
    );
  };

  if (isFetching || isLoading) return <Loading />;

  if (error) return <Error href="/search" errorMsg={error.message} />;

  return (
    <body className="grid grid-rows-layout gap-4 min-h-screen">
      <div id="headerWrapper">
        <Header />
        <Navigation />
      </div>
      <p className="text-center">
        投稿された情報を閲覧、収集できます。
        <br />
        新しいアイデアが湧いたり、創りたい商品を実現するキッカケになります。
      </p>
      <main className="grid grid-cols-main">
        <div className="col-start-2 col-end-3">
          <div className="grid grid-rows-search gap-4">
            <form
              onSubmit={handleSubmit(submit)}
              className="w-full h-16 flex justify-center grid grid-cols-searchForm gap-4"
            >
              <SelectCategory
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                register={register()}
              />
              <SearchInput
                category={category}
                register={register}
                errors={errors}
              />
              <SubmitBtn value="検索" />
            </form>
            {/* <div className="grid grid-cols-5 grid-rows-4 gap-5"> */}
            <div
              className={`grid grid-cols-5 grid-rows-${calculateRowCount(
                data.images.length,
                CONST.ONE_ROW_DISPLAY_DATA
              )}} gap-5`}
            >
              {data.totalCount === 0
                ? ""
                : data.images.map((item) => <SearchResult data={item} />)}
            </div>
            <div>
              <div>
                {/* ページネーション */}
                <ReactPaginate
                  previousLabel={arrowIcon("<", router.query.page)}
                  nextLabel={arrowIcon(">", router.query.page)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={4}
                  breakLabel={"..."}
                  breakClassName={"break"}
                  pageCount={calculatePageCount(
                    data.totalCount,
                    CONST.ONE_PAGE_DISPLAY_DATA
                  )}
                  onPageChange={(e) => {
                    changePageNum(e.selected + 1);
                  }}
                  containerClassName={"flex w-full justify-center"}
                  pageClassName={
                    "w-7 h-7 bg-purple-200 mx-2 text-center rounded-3xl font-semibold hover:bg-purple-600 hover:text-white"
                  }
                  pageLinkClassName={
                    "inline-block w-7 h-7 text-center rounded-3xl font-semibold"
                  }
                  activeClassName={"w-7 h-7 bg-purple-400 font-semibold"}
                  activeLinkClassName={
                    "inline-block w-7 h-7 text-center rounded-3xl font-semibold"
                  }
                  disabledClassName={"hidden"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}
