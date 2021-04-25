const Log4js = require("log4js");
Log4js.configure("log-config.json");

const getAppLogger = Log4js.getLogger("application");

//引数
//出力レベル、出力カテゴリ、データ
const appLogInfo = (fileName, category, data) => {
  switch (category) {
    case "START":
      getAppLogger.info(`${fileName}：START`);
      break;
    case "END":
      getAppLogger.info(`${fileName}：END`);
      break;
    case "REQUEST_DATA":
      getAppLogger.info(`${fileName}：REQUEST_DATA\r\n${makeReqDataLog(data)}`);
      break;
    case "SQL":
      getAppLogger.info(`${fileName}：SQL\r\n${data}`);
      break;
    case "RESULT":
      getAppLogger.info(`${fileName}：RESULT\r\n${makeGetDataLog(data)}`);
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

//取得データが配列の場合、ログ出力文字列に変換
const makeGetDataLog = (data) => {
  if (!Array.isArray(data)) {
    return data;
  }

  var getDataLog = "";

  //配列のデータ数だけループ
  for (let array of data) {
    //オブジェクトのキーの数だけループ
    for (let key in array) {
      getDataLog += `${key}：${array[key]}\r\n`;
    }
  }

  return getDataLog;
};

export { appLogInfo };
