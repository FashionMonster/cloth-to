import Link from "next/link";

//一覧/検索ページ
//検索結果表示
const SearchResult = (props) => {
  return (
    <div className="w-200 h-200 text-center">
      <Link
        href={`/contributionDetail?contributionId=${props.data.contributionId}`}
      >
        <img
          src={props.data.src}
          className="w-200 h-200 hover:opacity-70"
          alt="イメージ画像"
        />
      </Link>
    </div>
  );
};

export { SearchResult };
