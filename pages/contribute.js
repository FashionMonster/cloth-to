import axios from "axios";
// import firebase from "firebase/app";
// import "firebase/storage";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SubmitBtn } from "../components/button/submitBtn";
import { PreviewMainArea } from "../components/preview/previewMainArea";
import { PreviewSubArea } from "../components/preview/previewSubArea";
import { SelectCategory } from "../components/selectBox/selectCategory";
import { SelectColor } from "../components/selectBox/selectColor";
import { SelectComposition } from "../components/selectBox/selectComposition";
import { InputCompositionRatio } from "../components/textBox/inputCompositionRatio";
import { InputText } from "../components/textBox/inputText";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";

// // //Firebase 設定
// var firebaseConfig = {
//   apiKey: process.env.FIREBASE_KEY,
//   authDomain: process.env.FIREBASE_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// //Firebase Storage 初期化
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
//   firebase.storage();
// }

//ファイル読み込み処理
const readFile = (blob) => {
  return new Promise((resolve) => {
    // FileReaderの生成
    const reader = new FileReader();

    // ファイルの読み込み
    reader.readAsDataURL(blob);

    // reader.resultでファイル内容にアクセスできる
    reader.onload = () => {
      resolve(reader.result);
    };
  });
};

export default function Contribute() {
  const [imgFile, setImgFile] = useState([]);

  //ファイル選択イベント
  const fileSelect = async (e) => {
    e.preventDefault();

    //ファイルオブジェクトを取得
    const files = e.target.files;

    //ファイル、ファイル名のセット
    let fileList = [];
    for (const file of files) {
      const fileUrl = await readFile(file);
      fileList.push({ imgFileBlob: file, imgFileUrl: fileUrl });
    }

    setImgFile(fileList);
  };

  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery(
    "insertContribution",
    () =>
      axios
        .post("./api/insertContribution", { isInit: true })
        .then((res) => res.contributionId)
  );

  const mutation = useMutation(
    (formData) =>
      axios
        .post("./api/insertContribution", {
          isInit: false,
          materialName: formData.get("materialName"),
          category: formData.get("category"),
          composition1: formData.get("composition1"),
          compositionRatio1: formData.get("compositionRatio1"),
          composition2: formData.get("composition2"),
          compositionRatio2: formData.get("compositionRatio2"),
          composition3: formData.get("composition3"),
          compositionRatio3: formData.get("compositionRatio3"),
          fabricStructure: formData.get("fabricStructure"),
          color: formData.get("color"),
          pattern: formData.get("pattern"),
          processing: formData.get("processing"),
          unitPrice: formData.get("unitPrice"),
          supplier: formData.get("supplier"),
          comment: formData.get("comment"),
          imageUrl1: formData.get("imageUrl1"),
          imageUrl2: formData.get("imageUrl2"),
          imageUrl3: formData.get("imageUrl3"),
          imageUrl4: formData.get("imageUrl4"),
          imageUrl5: formData.get("imageUrl5"),
        })
        .then((res) => {}),
    {
      onSuccess: () => queryClient.invalidateQueries("insertContribution"),
    }
  );

  //投稿イベント
  const insertContribution = (e) => {
    e.preventDefault();
    //FireBase Storageに画像アップロード
    const idList = putImage();

    //リクエストデータ作成
    let formData = new FormData(e.target);

    for (let i = 0; i < 5; i++) {
      formData.append(
        `imageUrl${i + 1}`,
        idList[i] === undefined ? "" : idList[i]
      );
    }

    mutation.mutate(formData);
  };

  //FireBase Storageに画像アップロード
  const putImage = () => {
    let idList = [];
    for (const file of imgFile) {
      const id = nanoid();
      idList.push(id);
      let storageRef = firebase.storage().ref(id);
      storageRef.put(file.imgFileBlob);
    }
    return idList;
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <body className="grid grid-rows-layout gap-4 min-h-screen">
        <div id="headerWrapper">
          <Header />
          <Navigation />
        </div>
        <p className="text-center">
          社内・チームで情報を共有します。
          <br />
          あなたの投稿内容は、他メンバーの新たなクリエイションに役立てることができます。
        </p>
        <main className="grid grid-cols-layout">
          <form
            onSubmit={insertContribution}
            className="col-start-2 col-end-3 grid grid-cols-2"
          >
            <div>
              <div className="grid grid-rows-fileUpload gap-8">
                <PreviewMainArea
                  imgFileUrl={
                    imgFile[0] === undefined ? "" : imgFile[0].imgFileUrl
                  }
                />
                <div className="grid grid-cols-fileUpload gap-3">
                  <PreviewSubArea
                    imgFileUrl={
                      imgFile[1] === undefined ? "" : imgFile[1].imgFileUrl
                    }
                  />
                  <PreviewSubArea
                    imgFileUrl={
                      imgFile[2] === undefined ? "" : imgFile[2].imgFileUrl
                    }
                  />
                  <PreviewSubArea
                    imgFileUrl={
                      imgFile[3] === undefined ? "" : imgFile[3].imgFileUrl
                    }
                  />
                  <PreviewSubArea
                    imgFileUrl={
                      imgFile[4] === undefined ? "" : imgFile[4].imgFileUrl
                    }
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
                    name="imageFiles"
                    id="uploadBtn"
                    className="hidden"
                    onChange={fileSelect}
                  />
                </label>
              </div>
            </div>

            <div>
              <div className="grid grid-rows-11 grid-cols-contributeForm gap-8">
                <label htmlFor="materialName">素材・製品名</label>
                <InputText
                  name="materialName"
                  id="materialName"
                  placeholder="例：2020SS シャツ用生地"
                />

                <label htmlFor="category">分類</label>
                <SelectCategory name="category" id="category" />

                <label htmlFor="composition">主組成</label>
                <div className="grid grid-cols-3 gap-1">
                  <div className="grid grid-cols-2 gap-1">
                    <SelectComposition name="composition1" id="composition" />
                    <InputCompositionRatio name="compositionRatio1" />
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <SelectComposition name="composition2" id="composition" />
                    <InputCompositionRatio name="compositionRatio2" />
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <SelectComposition name="composition3" id="composition" />
                    <InputCompositionRatio name="compositionRatio3" />
                  </div>
                </div>

                <label htmlFor="fabricStructure">織・編地</label>
                <InputText
                  name="fabricStructure"
                  id="fabricStructure"
                  placeholder="例：サテン"
                />

                <label htmlFor="color">色</label>
                <SelectColor name="color" id="color" />

                <label htmlFor="pattern">柄</label>
                <InputText
                  name="pattern"
                  id="pattern"
                  placeholder="例：ストライプ"
                />

                <label htmlFor="processing">加工</label>
                <InputText
                  name="processing"
                  id="processing"
                  placeholder="例：撥水加工、防汚加工"
                />

                <label htmlFor="unitPrice">単価</label>
                <InputText
                  name="unitPrice"
                  id="unitPrice"
                  placeholder="例：480"
                />

                <label htmlFor="supplier">仕入先</label>
                <InputText
                  name="supplier"
                  id="supplier"
                  placeholder="例：株式会社 〇〇"
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
              </div>
            </div>
          </form>
        </main>
        <Footer />
      </body>
    </div>
  );
}
