import React, { useState } from "react";

export function FileUpload() {
  const [imgPreviewUrl1, setImgPreviewUrl1] = useState("");
  const [imgPreviewUrl2, setImgPreviewUrl2] = useState("");
  const [imgPreviewUrl3, setImgPreviewUrl3] = useState("");
  const [imgPreviewUrl4, setImgPreviewUrl4] = useState("");
  const [imgPreviewUrl5, setImgPreviewUrl5] = useState("");

  const fileSelect = (e) => {
    e.preventDefault();

    //ファイルオブジェクトを取得
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      // FileReaderの生成
      const reader = new FileReader();

      // ファイルの読み込み
      reader.readAsDataURL(files[i]);

      reader.onload = () => {
        // reader.resultでファイル内容にアクセスできる
        switch (i) {
          case 0:
            setImgPreviewUrl1(reader.result);
            break;
          case 1:
            setImgPreviewUrl2(reader.result);
            break;
          case 2:
            setImgPreviewUrl3(reader.result);
            break;
          case 3:
            setImgPreviewUrl4(reader.result);
            break;
          case 4:
            setImgPreviewUrl5(reader.result);
            break;
          default:
        }
      };
    }
  };

  return (
    <div>
      <div className="grid grid-rows-fileUpload gap-8">
        <img
          src={imgPreviewUrl1}
          alt="メインイメージ"
          className="w-490 h-490"
        />

        <div className="grid grid-cols-fileUpload gap-3">
          <img
            src={imgPreviewUrl2}
            alt="サブイメージ1"
            className="w-109 h-109"
          />
          <img
            src={imgPreviewUrl3}
            alt="サブイメージ2"
            className="w-109 h-109"
          />
          <img
            src={imgPreviewUrl4}
            alt="サブイメージ3"
            className="w-109 h-109"
          />
          <img
            src={imgPreviewUrl5}
            alt="サブイメージ4"
            className="w-109 h-109"
          />
        </div>

        <label
          for="uploadBtn"
          className="bg-purple-700 text-white rounded w-32 text-center px-2 py-1 hover:bg-purple-800 hover:text-white"
        >
          ファイルを選択
          <input
            type="file"
            multiple="multiple"
            id="uploadBtn"
            className="hidden"
            onChange={fileSelect}
          />
        </label>
      </div>
    </div>
  );
}
