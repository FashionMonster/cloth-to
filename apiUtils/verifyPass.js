import { default as bcrypt } from "bcrypt";

//パスワードをハッシュ化する
const verifyPass = async (inputPass, dbPass) => {
  let isVerify = await bcrypt.compare(inputPass, dbPass);
  return isVerify;
};

export { verifyPass };
