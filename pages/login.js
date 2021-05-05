import Router from "next/router";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/common/auth/authProvider";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { ModalWindow } from "../components/common/modal/modalWindow";
import { InputEmail } from "../components/common/textBox/inputEmail";
import { InputPassword } from "../components/common/textBox/inputPassword";
import { CONST } from "../constants/const";
import { login } from "../utils/login";

export default function Login() {
  const { handleSubmit, register, errors } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalMessage = useRef("");
  const { setLoginUserInfo } = useContext(AuthContext);

  const submit = async (data) => {
    await login(data.email, data.password)
      .then(() => {
        //コンテキストにユーザー情報をセット
        setLoginUserInfo();

        //ログイン後画面遷移
        Router.push("/search");
      })
      .catch((error) => {
        //モーダルを開く
        setIsOpen(true);

        //エラーメッセージをセット
        if (error.code === "auth/invalid-email") {
          modalMessage.current = CONST.ERR_MSG.INVALID_EMAIL;
        } else if (error.code === "auth/user-disabled") {
          modalMessage.current = CONST.ERR_MSG.USER_DISABLED;
        } else if (error.code === "auth/user-not-found") {
          modalMessage.current = CONST.ERR_MSG.USER_NOT_FOUND;
        } else if (error.code === "auth/wrong-password") {
          modalMessage.current = CONST.ERR_MSG.WRONG_PASSWORD;
        } else {
          modalMessage.current = CONST.ERR_MSG.OTHER;
        }
      });
  };

  return (
    <div>
      <body className="grid grid-rows-layout gap-4 min-h-screen">
        <div id="headerWrapper">
          <Header />
        </div>
        <p className="text-center">
          サービス利用にはログインが必要です。
          <br />
          下記の項目を入力してください。
        </p>
        <main className="grid grid-cols-main">
          <div className="col-start-2 col-end-3 grid grid-rows-3">
            <form
              onSubmit={handleSubmit(submit)}
              className=" row-start-2 row-end-3 grid grid-cols-2 gap-8 m-auto"
            >
              <label htmlFor="email">メールアドレス（ID）</label>
              <InputEmail
                name="email"
                id="email"
                placeholder=""
                register={register({ required: true })}
                errors={errors.email}
                width="48"
              />

              <label htmlFor="password">パスワード</label>
              <InputPassword
                name="password"
                id="password"
                placeholder=""
                register={register({ required: true })}
                errors={errors.password}
                width="48"
              />
              <div className="col-start-2 col-end-3 flex justify-center">
                <SubmitBtn value="ログイン" />
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </body>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        message={modalMessage.current}
      />
    </div>
  );
}
