import React from "react";
import { useForm } from "react-hook-form";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { InputEmail } from "../components/common/textBox/inputEmail";
import { InputPassword } from "../components/common/textBox/inputPassword";
import { login } from "../utils/login";

export default function Login() {
  const { handleSubmit, register, errors } = useForm();

  const submit = (data) => {
    login(data.email, data.password);
  };

  return (
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
            <label htmlFor="email">メールアドレス</label>
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
  );
}
