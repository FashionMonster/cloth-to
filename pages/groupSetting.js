/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Error } from "../components/common/error";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { Loading } from "../components/common/loading/loading";
import { ModalWindow } from "../components/common/modal/modalWindow";
import { Navigation } from "../components/common/navigation";
import { InputEmail } from "../components/common/textBox/inputEmail";
import { InputPassword } from "../components/common/textBox/inputPassword";
import { InputText } from "../components/common/textBox/inputText";
import { CONST } from "../constants/const";

export default function groupSetting() {
  const { handleSubmit, register, errors } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalMessage = useRef("");

  //グループアカウント登録イベント
  const createGroupAccount = async (data) => {
    mutation.mutate(data);
  };

  const mutation = useMutation((formData) =>
    axios.post("./api/createGroupAccount", formData).then((res) => {
      setIsOpen(true);

      if (res.data.errorCode === null) {
        modalMessage.current = CONST.OK_MSG.FIN_CREATE_GROUP;
      } else if (res.data.errorCode === "23505") {
        modalMessage.current = CONST.ERR_MSG.EMAIL_ALREADY_IN_USE;
      } else {
        modalMessage.current = CONST.ERR_MSG.OTHER;
      }
    })
  );

  if (mutation.isFetching || mutation.isLoading) return <Loading />;

  if (mutation.isError)
    return <Error href="/groupSetting" errorMsg={mutation.error.message} />;

  return (
    <div>
      <body className="grid grid-rows-layout gap-4 min-h-screen">
        <div id="headerWrapper">
          <Header />
          <Navigation />
        </div>
        <p className="text-center">
          グループ情報を登録します。
          <br />
          下記の項目を入力して登録して下さい。
        </p>
        <main className="grid grid-cols-main">
          <div className="col-start-2 col-end-3 grid grid-rows-3">
            <form
              onSubmit={handleSubmit(createGroupAccount)}
              className=" row-start-2 row-end-3 grid grid-cols-2 gap-8 m-auto"
            >
              <label htmlFor="userName">グループ名</label>
              <InputText
                name="groupName"
                id="groupName"
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
                <SubmitBtn value="グループ情報登録" />
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
