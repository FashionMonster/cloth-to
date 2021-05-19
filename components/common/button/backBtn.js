/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Router from "next/router";

//戻るボタンコンポーネント
const BackBtn = () => {
  return (
    <div
      onClick={Router.back}
      className="bg-purple-700 w-24 h-8 text-white rounded text-center px-2 py-1 hover:bg-purple-800 hover:text-white"
    >
      戻る
    </div>
  );
};
export { BackBtn };
