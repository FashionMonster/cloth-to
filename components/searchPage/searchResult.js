import Link from "next/link";

//一覧/検索ページ
//検索結果表示
const SearchResult = (props) => {
  return (
    <div className="mx-auto">
      <Link
        href={`/${props.path}/[contributionId]`}
        as={`/${props.path}/${props.data.contributionId}`}
      >
        <img
          src={props.data.src}
          className="w-200 h-200 hover:opacity-70"
          alt="イメージ画像"
        />
      </Link>
      <p className="font-medium w-200 text-center mt-4">
        {props.data.materialName}
      </p>
    </div>
  );
};

export { SearchResult };
