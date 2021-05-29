const CONST = {
  ONE_PAGE_DISPLAY_DATA: 20, //検索・一覧ページの１ページ表示件数
  ONE_ROW_DISPLAY_DATA: 5, //検索・一覧ページの１行の表示件数
  OK_MSG: {
    FIN_CREATE_CONTRIBUTION: "投稿完了しました",
    FIN_UPDATE_CONTRIBUTION: "投稿更新完了しました",
    FIN_CREATE_USER: "ユーザー登録完了しました",
    FIN_UPDATE_USER: "ユーザー更新完了しました",
    FIN_CREATE_GROUP: "グループ登録完了しました",
  },
  ERR_MSG: {
    EMAIL_ALREADY_IN_USE: "ID(メールアドレス)は既に使用されています",
    INVALID_EMAIL: "ID(メールアドレス)の形式が不正です",
    OPERATION_NOT_ALLOWED: "TODO",
    WEAK_PASSWORD: "パスワードが脆弱です。変更して下さい",
    USER_DISABLED: "現在使用できないユーザーです",
    USER_NOT_FOUND: "存在しないユーザーです",
    WRONG_PASSWORD: "パスワードが誤っています",
    OTHER: "予期しないエラーです。管理者に連絡して下さい",
  },
};

export { CONST };
