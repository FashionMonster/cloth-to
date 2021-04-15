//プレビュー画像表示(メイン)エリアコンポーネント
const PreviewMainArea = ({ imgFileUrl }) => {
  if (imgFileUrl === "") {
    return (
      <div className="w-480 h-480 border border-solid border-gray-400"></div>
    );
  } else {
    return (
      <img src={imgFileUrl} alt="メインイメージ" className="w-480 h-480" />
    );
  }
};

export { PreviewMainArea };
