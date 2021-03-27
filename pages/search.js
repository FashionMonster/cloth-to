/* eslint-disable jsx-a11y/no-onchange */
import axios from "axios";
import firebase from "firebase/app";
import "firebase/storage";
import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { SubmitBtn } from "../components/button/submitBtn";
import { SearchInput } from "../components/pageSearch/searchInput";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";

//試しーーーーーーーーーーーーーーーーーーーーーー

//Firebase 設定
var firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

//Firebase Storage 初期化
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.storage();
}

//試しーーーーーーーーーーーーーーーーーーーーーー
function downloadImage(fileName) {
  var storageRef = firebase.storage().ref();

  return new Promise(function (resolve) {
    storageRef
      .child(fileName)
      .getDownloadURL()
      .then(function (url) {
        resolve(url);
      });
    // .catch(function (error) {
    //   switch (error.code) {
    //     case "storage/object-not-found":
    //       // File doesn't exist
    //       break;
    //     case "storage/unauthorized":
    //       // User doesn't have permission to access the object
    //       break;
    //     case "storage/canceled":
    //       // User canceled the upload
    //       break;
    //     case "storage/unknown":
    //       // Unknown error occurred, inspect the server response
    //       break;
    //     default:
    //   }
    // });
  });
}

//データフェッチ
async function fetchContributions(apiParams) {
  const { data } = await axios.get("./api/getContribution", {
    params: {
      searchCategory: apiParams.searchCategory,
      keyword: apiParams.keyword,
      compositionRatio: apiParams.compositionRatio,
      compareCondfition: apiParams.compareCondfition,
    },
  });

  if (data.length >= 2) {
    for (let res of data) {
      const src = await downloadImage(res.imageUrl);
      res.src = src;
    }
  }
  return data;
}

//検索結果のセット
const SearchResult = (props) => {
  return (
    <div>
      <Link
        href={`/contributionDetail?contributionId=${props.data.contributionId}`}
      >
        <img
          src={props.data.src}
          className="w-270 h-270 inline-block"
          alt="イメージ"
        />
      </Link>
    </div>
  );
};

export default function Search() {
  const [category, setCategory] = useState("1");
  const [apiParams, setApiParams] = useState({
    searchCategory: "",
    keyword: "",
    compositionRatio: "",
    compareCondfition: "",
  });

  const { isLoading, error, data, isFetching } = useQuery(
    ["apiParams", apiParams],
    () => fetchContributions(apiParams)
  );

  //分類セレクトボックスの変更時
  const searchCategory = (e) => {
    setCategory(e.target.value);
  };

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
                <ul>
                  {data[0].contributionId === ""
                    ? ""
                    : data.map((item) => (
                        <li>
                          <SearchResult data={item} />
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </div>
  );
}
