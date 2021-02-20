import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SubmitBtn } from "../components/common";

const SelectComposition = () => {
  return (
    <select
      name="composition"
      id="composition"
      className="border border-solid rounded-sm border-gray-400"
    >
      <option value="0"></option>
      <option value="1">綿</option>
      <option value="2">麻</option>
      <option value="3">羊毛</option>
      <option value="4">絹</option>
      <option value="5">ポリエステル</option>
      <option value="6">ナイロン</option>
      <option value="7">アクリル</option>
      <option value="8">ポリウレタン</option>
      <option value="9">レーヨン</option>
      <option value="10">キュプラ</option>
      <option value="11">アセテート</option>
      <option value="12">その他</option>
    </select>
  );
};

export default function InputForm() {
  const queryClient = useQueryClient();

  const { isLoading, error, data, isFetching } = useQuery(
    "insertContribution",
    () =>
      axios
        .post("./api/insertContribution", { isInit: 1 })
        .then((res) => res.data)
  );

  const mutation = useMutation(
    (formData) =>
      axios
        .post("./api/insertContribution", {
          isInit: 0,
          materialName: formData.get("materialName"),
          category: formData.get("category"),
          fabricStructure: formData.get("fabricStructure"),
          color: formData.get("color"),
          pattern: formData.get("pattern"),
          unitPrice: formData.get("unitPrice"),
          supplier: formData.get("supplier"),
          comment: formData.get("comment"),
        })
        .then((res) => {}),
    // formData.forEach(function (value, key) {
    //   console.log(key + " = " + value);
    // }),
    {
      onSuccess: () => queryClient.invalidateQueries("insertContribution"),
    }
  );

  const insertContribution = (e) => {
    e.preventDefault();
    mutation.mutate(new FormData(e.target));
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <form
        onSubmit={insertContribution}
        className="grid grid-rows-11 grid-cols-contributeForm gap-8"
      >
        <label htmlFor="materialName">素材・製品名</label>
        <input
          type="text"
          name="materialName"
          id="materialName"
          placeholder="例：2020SS シャツ用生地"
          className="border border-solid rounded-sm border-gray-400"
        />

        <label htmlFor="category">分類</label>
        <select
          name="category"
          id="category"
          className="border border-solid rounded-sm border-gray-400"
        >
          <option value="0"></option>
          <option value="1">製品</option>
          <option value="2">生地</option>
          <option value="3">副資材</option>
          <option value="4">その他</option>
        </select>

        <label htmlFor="composition">主組成</label>
        <div className="grid grid-cols-3 gap-1">
          <div className="grid grid-cols-2 gap-1">
            <SelectComposition />
            <input
              type="number"
              min="1"
              max="100"
              name="percentage1"
              className="border border-solid rounded-sm border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <SelectComposition />
            <input
              type="number"
              min="1"
              max="100"
              name="percentage2"
              className="border border-solid rounded-sm border-gray-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <SelectComposition />
            <input
              type="number"
              min="1"
              max="100"
              name="percentage3"
              className="border border-solid rounded-sm border-gray-400"
            />
          </div>
        </div>

        <label htmlFor="fabricStructure">織・編地</label>
        <input
          type="text"
          name="fabricStructure"
          id="fabricStructure"
          placeholder="例：サテン"
          className="border border-solid rounded-sm border-gray-400"
        />

        <label htmlFor="color">色</label>
        <select
          name="color"
          id="color"
          className="border border-solid rounded-sm border-gray-400"
        >
          <option value="0"></option>
          <option value="1">レッド</option>
          <option value="2">オレンジ</option>
          <option value="3">イエロー</option>
          <option value="4">ベージュ</option>
          <option value="5">カーキ</option>
          <option value="6">オリーブ</option>
          <option value="7">グリーン</option>
          <option value="8">ネイビー</option>
          <option value="9">ブルー</option>
          <option value="10">パープル</option>
          <option value="11">ピンク</option>
          <option value="12">ホワイト</option>
          <option value="13">グレー</option>
          <option value="14">チャコールグレー</option>
          <option value="15">ブラック</option>
          <option value="16">シルバー</option>
          <option value="17">ゴールド</option>
          <option value="18">その他</option>
        </select>

        <label htmlFor="pattern">柄</label>
        <input
          type="text"
          name="pattern"
          id="pattern"
          placeholder="例：ストライプ"
          className="border border-solid rounded-sm border-gray-400"
        />

        <label htmlFor="processing">加工</label>
        <div className="grid grid-cols-3 gap-1">
          <input
            type="text"
            name="processing1"
            className="border border-solid rounded-sm border-gray-400"
            placeholder="例：撥水加工"
          />
          <input
            type="text"
            name="processing2"
            className="border border-solid rounded-sm border-gray-400"
            placeholder="例：防汚加工"
          />
          <input
            type="text"
            name="processing3"
            className="border border-solid rounded-sm border-gray-400"
            placeholder="例：シルキー加工"
          />
        </div>

        <label htmlFor="unitPrice">単価</label>
        <input
          type="text"
          name="unitPrice"
          id="unitPrice"
          placeholder="例：480"
          className="border border-solid rounded-sm border-gray-400"
        />

        <label htmlFor="supplier" className="">
          仕入先
        </label>
        <input
          type="text"
          name="supplier"
          id="supplier"
          placeholder="例：株式会社 〇〇"
          className="border border-solid rounded-sm border-gray-400"
        />

        <label htmlFor="comment">コメント</label>
        <textarea
          name="comment"
          className="h-116 border border-solid rounded-sm border-gray-400"
          id="comment"
          placeholder="記載した内容以外の情報があれば記入します。"
        />

        <div></div>
        <div className="flex justify-around">
          <SubmitBtn value="一時保存する" />
          <SubmitBtn value="投稿する" />
        </div>
      </form>
    </div>
  );
}
