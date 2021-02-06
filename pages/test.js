import React from "react";
import { SubmitBtn } from "../components/common";
// import axios from "axios";
// import {useMutation } from "react-query";

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

export default function Test() {
  // const mutation = useMutation((formData) => {
  //   return fetch("http://localhost:3000/api/test", formData).then((res) =>
  //     console.log(res.json())
  //   );
  // });
  // const request = (event) => {
  //   event.preventDefault();
  //   mutation.mutate(new FormData(event.target));
  // };

  // const axiosTest = (e) => {
  //   axios
  //     .get("./api/test", { reqTest: e.target.userId.value })
  //     .then(function (response) {
  //       console.log(response.data);
  //     });
  // };

  const fetchTest = (e) => {
    console.log(e.target.userId.value);
    fetch("http://localhost:3000/api/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: { reqTest: e.target.userId.value },
    }).then((res) => res.json());
  };

  return (
    <form onSubmit={fetchTest}>
      <SettingItem id="userId">ユーザーID：</SettingItem>
      <SettingInput type="text" name="userId" />
      <SubmitBtn value="ユーザー情報更新" />
    </form>
  );
}
