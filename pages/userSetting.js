import axios from "axios";
import Router from "next/router";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { AuthContext } from "../components/common/auth/authProvider";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Error } from "../components/common/error";
import { Header } from "../components/common/header";
import { Loading } from "../components/common/loading/loading";
import { ModalWindow } from "../components/common/modal/modalWindow";
import { Navigation } from "../components/common/navigation";
import { InputEmail } from "../components/common/textBox/inputEmail";
import { InputPassword } from "../components/common/textBox/inputPassword";
import { InputText } from "../components/common/textBox/inputText";
import { CONST } from "../constants/const";
import { updateUserInfo } from "../utils/updateUserInfo";
import { usePreviousValue } from "../utils/usePreviousValue";

export default function UserSetting() {
  const { handleSubmit, register, errors } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const previousModalIsOpen = usePreviousValue(modalIsOpen);
  const modalMessage = useRef("");
  const value = useContext(AuthContext);

  //ユーザー情報更新イベント
  const updateUserAccount = (data) => {
    //更新条件のキー情報
    data.previousUserId = value.userInfo.userId;

    //ユーザー情報更新
    const resData = mutation.mutate(data);

    return resData;
  };

  const mutation = useMutation(async (formData) => {
    //DB更新(ID、名前)
    const data = await axios.post("./api/updateUserInfo", formData);

    try {
      //firebase更新(ID、PW)
      await updateUserInfo(formData.email, formData.password);
    } catch (error) {
      //DB更新(元々のID、名前)
      const param = {
        previousUserId: formData.email,
        email: formData.previousUserId,
        userName: value.userInfo.userName,
      };
      await axios.post("./api/updateUserInfo", param);

      //mutation.isErrorがキャッチする
      throw error;
    }

    //成功メッセージ表示設定
    setIsUpdateSuccess(true);
    setIsOpen(true);
    modalMessage.current = CONST.OK_MSG.FIN_UPDATE_USER;

    return data;
  });

  if (mutation.isFetching || mutation.isLoading) return <Loading />;

  if (mutation.isError) {
    return (
      <Error
        backType={CONST.BACK_TYPE.RELOAD}
        href="/userSetting"
        errorMsg={mutation.error.message}
      />
    );
  }

  //更新完了メッセージが開いた状態から閉じる時
  if (previousModalIsOpen && !modalIsOpen && isUpdateSuccess) {
    Router.push("/login");
  }

  return (
    <div>
      <body className="grid grid-rows-layout gap-8 min-h-screen">
        <div id="headerWrapper">
          <Header isLogined={true} />
          <Navigation />
        </div>
        <p className="text-center">
          ユーザー情報を変更できます。
          <br />
          下記の項目を入力して更新して下さい。
        </p>
        <main className="grid grid-cols-contents">
          <div className="col-start-2 col-end-3 grid grid-rows-form">
            <form
              onSubmit={handleSubmit(updateUserAccount)}
              className=" row-start-2 row-end-3 grid grid-cols-2 gap-8 m-auto"
            >
              <label htmlFor="userName">ユーザー名</label>
              <InputText
                name="userName"
                id="userName"
                defaultValue={value.userName}
                placeholder=""
                register={register({ required: true, maxLength: 20 })}
                errors={errors.userName}
                width="48"
                maxLength="20"
              />

              <label htmlFor="email">メールアドレス（ID）</label>
              <InputEmail
                name="email"
                id="email"
                defaultValue={value.userId}
                placeholder=""
                register={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$/,
                  maxLength: 255,
                })}
                errors={errors.email}
                width="48"
              />

              <label htmlFor="password">パスワード</label>
              <InputPassword
                name="password"
                id="password"
                placeholder=""
                register={register({
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
                errors={errors.password}
                width="48"
              />
              <div className="col-start-2 col-end-3 flex justify-center">
                <SubmitBtn value="ユーザー情報更新" width={40} />
              </div>
            </form>
          </div>
        </main>
      </body>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        message={modalMessage.current}
      />
    </div>
  );
}
