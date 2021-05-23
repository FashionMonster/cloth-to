/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Router, { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { useQuery, useQueryClient } from "react-query";
import { AuthContext } from "../components/common/auth/authProvider";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Error } from "../components/common/error";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { ArrowIcon } from "../components/common/icon/arrowIcon";
import { Loading } from "../components/common/loading/loading";
import { Navigation } from "../components/common/navigation";
import { SearchInput } from "../components/pageSearch/searchInput";
import { SearchResult } from "../components/pageSearch/searchResult";
import { SelectCategory } from "../components/pageSearch/selectCategory";
import { CONST } from "../constants/const";
import { calculatePageCount } from "../utils/calculatePageCount";
import { calculateRowCount } from "../utils/calculateRowCount";
import { changePageNum } from "../utils/changePageNum";
import { checkLogin } from "../utils/checkLogin";
import { fetchContributions } from "../utils/fetchContributions";
import { nvl } from "../utils/nvl";

export default function ContributionHistory() {
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
    ["contributionHistoryPath", router.asPath],
    () =>
      fetchContributions(
        CONST.API_PATH.GET_CONTRIBUTION_HISTORY,
        router,
        value.userInfo
      )
  );

  //検索処理
  const submit = (data) => {
    //初期化
    document.getElementById("searchCategory").options[0].selected = true;
    setCategory("1");

    //キャッシュキーを更新⇒検索内容が同じでも再fetchする
    queryClient.invalidateQueries("contributionHistoryPath");

    //クエリパラメータをセット
    router.push({
      pathname: "/contributionHistory",
      query: {
        page: 1,
        searchCategory: data.searchCategory,
        keyword: data.keyword,
        compositionRatio: nvl(data.compositionRatio),
        compareCondition: nvl(data.compareCondition),
      },
    });
  };

  if (isFetching || isLoading) return <Loading />;

  if (error)
    return <Error href="/contributionHistory" errorMsg={error.message} />;

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
            <div
              className={`grid grid-cols-5 grid-rows-${calculateRowCount(
                data.images.length,
                CONST.ONE_ROW_DISPLAY_DATA
              )}} gap-5`}
            >
              {data.totalCount === 0
                ? ""
                : data.images.map((item) => (
                    <SearchResult data={item} path="edit" />
                  ))}
            </div>
            <div>
              <div>
                {/* ページネーション */}
                <ReactPaginate
                  previousLabel={(() => {
                    //初期表示 又は 検索取得件数が0件の場合
                    if (router.query.page === 0 || data.totalCount === 0) {
                      return <></>;
                    } else {
                      return (
                        <ArrowIcon
                          icon="<"
                          pathName="/contributionHistory"
                          router={router}
                        />
                      );
                    }
                  })()}
                  nextLabel={(() => {
                    //初期表示 又は 検索取得件数が0件の場合
                    if (router.query.page === 0 || data.totalCount === 0) {
                      return <></>;
                    } else {
                      return (
                        <ArrowIcon
                          icon=">"
                          pathName="/contributionHistory"
                          router={router}
                        />
                      );
                    }
                  })()}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={4}
                  breakLabel={"..."}
                  breakClassName={"break"}
                  pageCount={calculatePageCount(
                    data.totalCount,
                    CONST.ONE_PAGE_DISPLAY_DATA
                  )}
                  onPageChange={(e) => {
                    changePageNum(
                      e.selected + 1,
                      "/contributionHistory",
                      router
                    );
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