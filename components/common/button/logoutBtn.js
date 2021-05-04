/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { logout } from "../../../utils/logout";

//ログアウトボタン
const LogoutBtn = () => {
  return (
    <div
      onClick={logout}
      className=" absolute right-4 top-2 bg-purple-700 w-24 h-8 text-white rounded text-center px-2 py-1 hover:bg-purple-800 hover:text-white"
    >
      ログアウト
    </div>
  );
};
export { LogoutBtn };
