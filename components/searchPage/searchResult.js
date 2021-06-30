import Image from "next/image";
import Link from "next/link";
import { makeDispMaterialName } from "../../utils/makeDispMaterialName";

//一覧/検索ページ
//検索結果表示
const SearchResult = (props) => {
  return (
    <div className="mx-auto">
      <Link
        href={`/${props.path}/[contributionId]`}
        as={`/${props.path}/${props.data.contributionId}`}
      >
        <Image
          src={props.data.src}
          width={200}
          height={200}
          alt="イメージ画像"
        />
      </Link>
      <p className="font-semibold w-200 text-center mt-4">
        {makeDispMaterialName(props.data.materialName)}
      </p>
    </div>
  );
};

export { SearchResult };
