//プレビュー画像表示(サブ)エリアコンポーネント
const PreviewSubArea = ({ imgFileUrl }) => {
  if (imgFileUrl === "") {
    return (
      <div className="w-109 h-109 border border-solid border-gray-400"></div>
    );
  } else {
    return <img src={imgFileUrl} alt="サブイメージ" className="w-109 h-109" />;
  }
};

export { PreviewSubArea };
