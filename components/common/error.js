import Router from "next/router";
import { Footer } from "./footer";
import { Header } from "./header";

//エラー表示コンポーネント(画面)
const Error = (props) => {
  return (
    <body className="min-h-screen grid grid-rows-error">
      <Header />
      <main className="grid grid-cols-main">
        <div className="col-start-2 col-end-3 grid grid-rows-6">
          <div className="flex justify-center items-center row-start-3 row-end-4">
            <p>{props.errorMsg}</p>
          </div>
          <div className="flex justify-center items-center row-start-4 row-end-5">
            <button
              onClick={() => Router.reload(props.href)}
              className="bg-purple-700 h-8 text-white rounded text-center px-2 py-1 hover:bg-purple-800 hover:text-white"
            >
              戻る
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export { Error };
