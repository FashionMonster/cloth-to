import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
import { SubmitBtn } from "../components/common";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

const SettingItem = ({ id, children }) => {
  return (
    <div className="h-8 leading-8">
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

const SettingInput = ({ type, name }) => {
  return (
    <input
      type="text"
      name={name}
      id={name}
      className="w-80 border border-solid rounded-sm border-gray-400"
    />
  );
};

export default function Setting() {
  const mutation = useMutation((formData) => {
    return axios
      .post("./api/updateUser", {
        compId: formData.get("compId"),
        compPass: formData.get("compPass"),
        userId: formData.get("userId"),
        userPass: formData.get("userPass"),
      })
      .then((res) => {
        console.log(res.data);
      });
  });
  const formSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(new FormData(e.target));
  };

  return (
    <div>
      <body className="grid grid-rows-layout gap-4 min-h-screen">
        <div id="headerWrapper">
          <Header />
          <Navigation />
        </div>
        <p className="text-center">
          ユーザー情報またはそれに紐づく企業情報の変更を行います。
          <br />
          変更したい場合は以下の情報を編集して下さい。
        </p>

        <main className="grid grid-cols-layout grid-rows-3">
          <div className="col-start-2 col-end-3 row-start-2 row-end-3">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-auto3x">
                <form
                  onSubmit={formSubmit}
                  className="col-start-2 col-end-3 grid grid-rows-3 gap-8"
                >
                  <div className="grid grid-cols-settingForm">
                    <SettingItem id="compId">企業ID：</SettingItem>
                    <SettingInput type="text" name="compId" />
                  </div>
                  <div className="grid grid-cols-settingForm">
                    <SettingItem id="compPass">企業PW：</SettingItem>
                    <SettingInput type="password" name="compPass" />
                  </div>
                  <div className="grid grid-cols-settingForm">
                    <div className="w-80 col-start-2 col-end-3 flex justify-center">
                      <SubmitBtn value="企業情報更新" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="grid grid-cols-auto3x">
                <form
                  onSubmit={formSubmit}
                  className="col-start-2 col-end-3 grid grid-rows-3 gap-8"
                >
                  <div className="grid grid-cols-settingForm">
                    <SettingItem id="userId">ユーザーID：</SettingItem>
                    <SettingInput type="text" name="userId" />
                  </div>
                  <div className="grid grid-cols-settingForm">
                    <SettingItem id="userPass">ユーザーPW：</SettingItem>
                    <SettingInput type="password" name="userPass" />
                  </div>
                  <div className="grid grid-cols-settingForm">
                    <div className="w-80 col-start-2 col-end-3 flex justify-center">
                      <SubmitBtn value="ユーザー情報更新" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </div>
  );
}
