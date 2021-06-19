import axios from "axios";
import Router from "next/router";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Error } from "../components/common/error";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { Loading } from "../components/common/loading/loading";
import { ModalWindow } from "../components/common/modal/modalWindow";
import { InputEmail } from "../components/common/textBox/inputEmail";
import { InputPassword } from "../components/common/textBox/inputPassword";
import { InputText } from "../components/common/textBox/inputText";
import { CONST } from "../constants/const";
import { signup } from "../utils/signup";
import { usePreviousValue } from "../utils/usePreviousValue";

export default function Signup() {
  const { handleSubmit, register, errors } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);
  const previousModalIsOpen = usePreviousValue(modalIsOpen);
  const modalMessage = useRef("");

  //ユーザー新規登録イベント
  const createUserAccount = (data) => {
    const resData = mutation.mutate(data);

    return resData;
  };

  const mutation = useMutation(async (formData) => {
    //DBにユーザー登録
    const data = await axios.post("./api/signup", formData);

    try {
      //firebaseにユーザー登録
      await signup(formData.email, formData.password);
    } catch (error) {
      try {
        //DBに登録したユーザーを削除
        await axios.post("./api/deleteUserInfo", formData);
      } catch (e) {
        //mutation.isErrorがキャッチする
        throw e;
      }

      //モーダルを開く
      setIsOpen(true);

      //firebaseで発生したエラーメッセージをセット
      if (error.code === "auth/email-already-in-use") {
        modalMessage.current = CONST.ERR_MSG.EMAIL_ALREADY_IN_USE;
      } else if (error.code === "auth/invalid-email") {
        modalMessage.current = CONST.ERR_MSG.INVALID_EMAIL;
      } else if (error.code === "auth/operation-not-allowed") {
        modalMessage.current = CONST.ERR_MSG.OPERATION_NOT_ALLOWED;
      } else if (error.code === "auth/weak-password") {
        modalMessage.current = CONST.ERR_MSG.WEAK_PASSWORD;
      } else {
        modalMessage.current = CONST.ERR_MSG.OTHER;
      }

      return data;
    }

    //成功メッセージ表示設定
    setIsCreateSuccess(true);
    setIsOpen(true);
    modalMessage.current = CONST.OK_MSG.FIN_CREATE_USER;

    return data;
  });

  if (mutation.isFetching || mutation.isLoading) return <Loading />;

  if (mutation.isError) {
    return (
      <Error
        backType={CONST.BACK_TYPE.RELOAD}
        href="/signup"
        errorMsg={mutation.error.message}
      />
    );
  }

  //登録完了メッセージが開いた状態から閉じる時
  if (previousModalIsOpen && !modalIsOpen && isCreateSuccess) {
    Router.push("/login");
  }

  return (
    <div>
      <body className="grid grid-rows-layout gap-8 min-h-screen">
        <div id="headerWrapper">
          <Header />
        </div>
        <p className="text-center">
          サービス利用にはユーザー登録が必要です。
          <br />
          下記の項目を入力してください。
        </p>
        <main className="grid grid-cols-contents">
          <div className="col-start-2 col-end-3 grid grid-rows-form">
            <form
              onSubmit={handleSubmit(createUserAccount)}
              className=" row-start-2 row-end-3 m-auto grid grid-cols-2 gap-8"
              novalidate="novalidate"
            >
              <label htmlFor="userName">ユーザー名</label>
              <InputText
                name="userName"
                id="userName"
                placeholder=""
                register={register({ required: true })}
                errors={errors.userName}
                width="48"
              />

              <label htmlFor="email">メールアドレス（ID）</label>
              <InputEmail
                name="email"
                id="email"
                placeholder=""
                register={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$/,
                })}
                errors={errors.email}
                width="48"
              />

              <label htmlFor="password">パスワード</label>
              <InputPassword
                name="password"
                id="password"
                placeholder=""
                register={register({ required: true, minLength: 6 })}
                errors={errors.password}
                width="48"
              />
              <div className="col-start-2 col-end-3 flex justify-center">
                <SubmitBtn value="登録" width={20} />
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
