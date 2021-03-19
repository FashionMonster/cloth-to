//プレビュー画像表示(メイン)エリアコンポーネント
const PreviewMainArea = ({ imgFileUrl }) => {
  if (imgFileUrl === "") {
    return (
      <div className="w-490 h-490 border border-solid border-gray-400"></div>
    );
  } else {
    return (
      <img src={imgFileUrl} alt="メインイメージ" className="w-490 h-490" />
    );
  }
};

export { PreviewMainArea };
