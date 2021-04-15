import { NavLink } from "./navLink";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-purple-100 h-12 grid grid-cols-layout">
        <div className="col-start-2 col-end-3">
          <ul className="grid grid-cols-4 h-12 items-center w-1080">
            <NavLink href="/search">一覧/検索</NavLink>
            <NavLink href="/contribute">投稿</NavLink>
            <NavLink href="/edit">履歴/編集</NavLink>
            <NavLink href="/setting">設定</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export { Navigation };
