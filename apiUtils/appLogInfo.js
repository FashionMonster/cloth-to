const Log4js = require("log4js");
Log4js.configure("log-config.json");

const getAppLogger = Log4js.getLogger("application");

//引数
//出力レベル、出力カテゴリ、データ
const appLogInfo = (fileName, category, data) => {
  switch (category) {
    case "start":
      getAppLogger.info(`${fileName}：start`);
      break;
    case "end":
      getAppLogger.info(`${fileName}：end`);
      break;
    case "requestData":
      getAppLogger.info(`${fileName}：requestData\r\n${makeReqDataLog(data)}`);
      break;
    default:
  }
};

//リクエストデータをログ出力文字列に変換
const makeReqDataLog = (data) => {
  var reqDataLog = "";
  for (let key in data) {
    reqDataLog += `${key}：${data[key]}\r\n`;
  }

  return reqDataLog;
};

export { appLogInfo };
