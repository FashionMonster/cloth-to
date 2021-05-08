import { NavLink } from "./navLink";

//設定サブナビゲーション
const DropDownNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink href="/userSetting">ユーザー設定</NavLink>
      </li>
      <li>
        <NavLink href="/groupSetting">グループアカウント作成</NavLink>
      </li>
      <li>
        <NavLink href="/linkUserToGroup">グループ紐づけ</NavLink>
      </li>
    </ul>
  );
};

export { DropDownNavigation };
