import Link from "next/Link";

//ログインボタン
const LoginBtn = () => {
  return (
    <Link href="/login">
      <a className="w-24 h-8 block bg-purple-700 text-white rounded-3xl text-center px-2 py-1 hover:bg-purple-800 hover:text-white">
        ログイン
      </a>
    </Link>
  );
};
export { LoginBtn };
