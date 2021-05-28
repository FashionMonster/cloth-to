import Link from "next/Link";

//会員登録ボタン
const CreateUserBtn = () => {
  return (
    <Link href="/signup">
      <a className="w-36 h-8 block bg-purple-700 text-white rounded-3xl text-center px-2 py-1 hover:bg-purple-800 hover:text-white">
        無料ユーザー登録
      </a>
    </Link>
  );
};
export { CreateUserBtn };
