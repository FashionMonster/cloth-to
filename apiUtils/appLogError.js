const Log4js = require("log4js");
Log4js.configure("log-config.json");

const getAppLogger = Log4js.getLogger("application");
const getErrLogger = Log4js.getLogger("error");

//引数
//ファイル名、出力カテゴリ、エラー
const appLogError = (fileName, category, e) => {
  //２つのファイルにそれぞれエラー内容を出力する
  switch (category) {
    case "database":
      getAppLogger.error(`${fileName}：database\r\n${e.stack}`);
      getErrLogger.error(`${fileName}：database\r\n${e.stack}`);
      break;
    default:
  }
};

export { appLogError };
