/* eslint-disable jsx-a11y/no-onchange */
import axios from "axios";
// import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { SubmitBtn } from "../components/button/submitBtn";
import { SelectCategory } from "../components/selectBox/selectCategory";
import { SelectColor } from "../components/selectBox/selectColor";
import { SelectCompareCondfition } from "../components/selectBox/selectCompareCondfition";
import { SelectComposition } from "../components/selectBox/selectComposition";
import { InputCompositionRatio } from "../components/textBox/inputCompositionRatio";
import { InputText } from "../components/textBox/inputText";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";

//入力エリアコンポーネント
const SearchInput = ({ category }) => {
  if (["1", "4", "6", "7", "9", "10"].includes(category)) {
    return <InputText name="keyword" id="keyword" placeholder="" />;
  } else if (category === "2") {
    return <SelectCategory name="keyword" id="keyword" />;
  } else if (category === "3") {
    return (
      <div>
        <SelectComposition name="keyword" id="keyword" />
        <InputCompositionRatio name="compositionRatio" id="compositionRatio" />
        <SelectCompareCondfition name="compareCondfition" />
      </div>
    );
  } else if (category === "5") {
    return <SelectColor name="keyword" id="keyword" />;
  } else if (category === "8") {
    return (
      <div>
        <InputText name="keyword" id="keyword" placeholder="" />
        <SelectCompareCondfition name="compareCondfition" />
      </div>
    );
  }
};

//検索結果のセット
// const SearchResult = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <Link href={`/contributionDetail?contributionId=${props.contributionId}`}>
//         <img className="w-270 h-270 inline-block" alt="イメージ" />
//       </Link>
//     </div>
//   );
// };

export default function Search() {
  // const [searchResult, setSearchResult] = useState("");
  const [category, setCategory] = useState("1");
  const [apiParams, setApiParams] = useState({
    searchCategory: "",
    keyword: "",
    compositionRatio: "",
    compareCondfition: "",
  });

  //分類セレクトボックスの変更時
  const searchCategory = (e) => {
    setCategory(e.target.value);
  };

  const { isLoading, error, data, isFetching } = useQuery(
    "getContribution",
    () =>
      axios
        .get("./api/getContribution", {
          params: {
            searchCategory: apiParams.searchCategory,
            keyword: apiParams.keyword,
            compositionRatio: apiParams.compositionRatio,
            compareCondfition: apiParams.compareCondfition,
          },
        })
        .then((res) => {})
  );

  //パラメータのセット
  const getContribution = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const params = {
      searchCategory:
        formData.get("searchCategory") === null
          ? ""
          : formData.get("searchCategory"),
      keyword: formData.get("keyword") === null ? "" : formData.get("keyword"),
      compositionRatio:
        formData.get("compositionRatio") === null
          ? ""
          : formData.get("compositionRatio"),
      compareCondfition:
        formData.get("compareCondfition") === null
          ? ""
          : formData.get("compareCondfition"),
    };

    // console.log(params);
    setApiParams(params);
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
            <div className="">
              <form
                onSubmit={getContribution}
                className="h-8 grid grid-cols-3 justify-between"
              >
                <div className="col-start-2 col-end-3 flex justify-between">
                  <select
                    name="searchCategory"
                    onChange={searchCategory}
                    className="w-28 border border-solid rounded-sm border-gray-400"
                  >
                    <option value="1">素材・製品名</option>
                    <option value="2">分類</option>
                    <option value="3">主組成</option>
                    <option value="4">織・編地</option>
                    <option value="5">色</option>
                    <option value="6">柄</option>
                    <option value="7">加工</option>
                    <option value="8">単価</option>
                    <option value="9">仕入先</option>
                    <option value="10">投稿者</option>
                  </select>
                  <SearchInput category={category} />
                  <SubmitBtn value="検索" />
                </div>
              </form>
              <div className="">
                {/* <ul>
                  {data.map((item) => (
                    <li>{item.contributionId}</li>
                  ))}
                </ul> */}
                {/* {{ searchResult } !== "" && (
                  <SearchResult searchResult={searchResult} />
                )} */}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </div>
  );
}
