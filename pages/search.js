/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { Navigation } from "../components/common/navigation";
import { SearchInput } from "../components/pageSearch/searchInput";
import { SearchResult } from "../components/pageSearch/searchResult";
import { SelectCategory } from "../components/pageSearch/selectCategory";
import { CONST } from "../constants/const";
import { calculatePageCount } from "../utils/calculatePageCount";
import { downloadImage } from "../utils/downloadImage";
import { nvl } from "../utils/nvl";

//データフェッチ
async function fetchContributions(searchInfo) {
  const { data } = await axios.get("./api/getContribution", {
    params: {
      page: searchInfo.pageNum,
      searchCategory: searchInfo.apiParam.searchCategory,
      keyword: searchInfo.apiParam.keyword,
      compositionRatio: searchInfo.apiParam.compositionRatio,
      compareCondfition: searchInfo.apiParam.compareCondfition,
    },
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
  const { handleSubmit, register, errors } = useForm();
  const [category, setCategory] = useState("1");
  const [searchInfo, setSearchInfo] = useState({
    pageNum: 0,
    apiParam: {
      searchCategory: "",
      keyword: "",
      compositionRatio: "",
      compareCondfition: "",
    },
  });

  const { isLoading, error, data } = useQuery(["searchInfo", searchInfo], () =>
    fetchContributions(searchInfo)
  );

  //パラメータのセット
  const getContribution = (data) => {
    const params = {
      searchCategory: nvl(data.searchCategory),
      keyword: nvl(data.keyword),
      compositionRatio: nvl(data.compositionRatio),
      compareCondfition: nvl(data.compareCondfition),
    };

    //初期化
    setCategory("1");

    //検索に入力した情報をセット
    setSearchInfo({ pageNum: 1, apiParam: params });
  };

  //ページネーションの両端アイコン
  const arrowIcon = (iconName, currentPage) => {
    let page;
    if (iconName === "<") {
      page = currentPage - 1;
    } else if (iconName === ">") {
      page = currentPage + 1;
    }

    //初期表示 又は ページが存在しない場合
    if (currentPage === 0 || data.totalCount === 0) {
      return <></>;
    }

    return (
      <div
        onClick={() =>
          setSearchInfo({ pageNum: page, apiParam: searchInfo.apiParam })
        }
        className="w-7 h-7 bg-purple-200 mx-2 text-center rounded-3xl font-semibold hover:bg-purple-600 hover:text-white"
      >
        {iconName}
      </div>
    );
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
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
        <main className="grid grid-cols-layout">
          <div className="col-start-2 col-end-3">
            <div className="grid grid-rows-search gap-4">
              <form
                onSubmit={handleSubmit(getContribution)}
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
              <div className="grid grid-cols-3 grid-rows-3 gap-2">
                {data.totalCount === 0
                  ? ""
                  : data.images.map((item) => <SearchResult data={item} />)}
              </div>
              <div>
                <div>
                  {/* ページネーション */}
                  <ReactPaginate
                    previousLabel={arrowIcon("<", searchInfo.pageNum)}
                    nextLabel={arrowIcon(">", searchInfo.pageNum)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    breakLabel={"..."}
                    breakClassName={"break"}
                    pageCount={calculatePageCount(
                      data.totalCount,
                      CONST.ONE_PAGE_DISPLAY_DATA
                    )}
                    onPageChange={(e) => {
                      setSearchInfo({
                        pageNum: e.selected + 1,
                        apiParam: searchInfo.apiParam,
                      });
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
    </div>
  );
}
