import React from "react";
import { SubmitBtn } from "../components/common";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                  method="get"
                  action="./api/searchContribution"
                  className="h-8 grid grid-cols-3 justify-between"
                >
                  <div className="col-start-2 col-end-3 flex justify-between">
                    <select
                      name="searchCategory"
                      className="w-24 border border-solid rounded-sm border-gray-400"
                    >
                      <option value="name">名称</option>
                      <option value="material">素材</option>
                      <option value="price">単価</option>
                      <option value="supplier">仕入先</option>
                      <option value="contributer">投稿者</option>
                    </select>
                    <input
                      type="text"
                      name="keyword"
                      className="w-48 border border-solid rounded-sm border-gray-400"
                    ></input>
                    <SubmitBtn value="検索" />
                  </div>
                </form>

                <div className="">
                  {/* <img className="w-109 h-109" />
                                <div className="">
                                    <p className="">【素材・製品名】</p>
                                    <button className="">【詳細/メッセージ】</button>
                                </div> */}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </body>
      </div>
    );
  }
}

export default Search;
