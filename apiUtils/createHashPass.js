import { default as bcrypt } from "bcrypt";
import { CONST } from "../apiConstants/const";

//パスワードをハッシュ化する
const createHashPass = async (password) => {
  const salt = await bcrypt.genSalt(CONST.SALT_ROUNDS);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

export { createHashPass };
