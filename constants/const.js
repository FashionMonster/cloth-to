const CONST = {
  ONE_PAGE_DISPLAY_DATA: 20, //検索・一覧ページの１ページ表示件数
  ONE_ROW_DISPLAY_DATA: 5, //検索・一覧ページの１行の表示件数
  BACK_TYPE: {
    RELOAD: "reload",
    BROWSER_BACK: "browserBack",
  },
  OK_MSG: {
    FIN_CREATE_CONTRIBUTION: "投稿完了しました",
    FIN_UPDATE_CONTRIBUTION: "投稿更新完了しました",
    FIN_CREATE_USER: "ユーザー登録完了しました",
    FIN_UPDATE_USER: "ユーザー情報更新完了しました",
    FIN_LINK_USER_TO_GROUP: "グループ紐付け完了しました",
    FIN_CREATE_GROUP: "グループ登録完了しました",
  },
  ERR_MSG: {
    EMAIL_ALREADY_IN_USE: "メールアドレス(ID)は既に使用されています",
    INVALID_EMAIL: "メールアドレス(ID)の形式が不正です",
    OPERATION_NOT_ALLOWED: "ユーザー登録処理は現在許可されていません",
    WEAK_PASSWORD: "パスワードが脆弱です。変更して下さい",
    USER_DISABLED: "現在使用できないユーザーです",
    USER_NOT_FOUND: "入力したメールアドレス(ID)は存在しません",
    WRONG_PASSWORD: "パスワードが誤っています",
    WORNG_EXTENSION: ".jpeg .jpg .gif .png 以外のファイルは選択不可です",
    OTHER: "予期しないエラーです。管理者に連絡して下さい",
  },
};

export { CONST };
