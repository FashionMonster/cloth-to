import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FileSelectBtn } from "../components/common/button/fileSelectBtn";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import { Navigation } from "../components/common/navigation";
import { PreviewMainArea } from "../components/common/preview/previewMainArea";
import { PreviewSubArea } from "../components/common/preview/previewSubArea";
import ContributionForm from "../components/pagecontribute/contributionForm";
import { readFile } from "../utils/readFile";
import { uploadImage } from "../utils/uploadImage";

export default function Contribute() {
  const [imgFile, setImgFile] = useState([]);
  const {
    handleSubmit,
    register,
    errors,
    getValues,
    setError,
    clearErrors,
  } = useForm();

  //ファイル選択イベント
  const selectFile = async (e) => {
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

  //投稿イベント
  const insertContribution = (data) => {
    //FireBase Storageに画像アップロード
    const idList = uploadImage(imgFile);

    for (let i = 0; i < 5; i++) {
      data[`imageUrl${i + 1}`] = idList[i] === undefined ? "" : idList[i];
    }

    data.isInit = false;

    mutation.mutate(data);
  };

  const mutation = useMutation(
    (formData) =>
      axios.post("./api/insertContribution", formData).then((res) => {}),
    {
      onSuccess: () => queryClient.invalidateQueries("insertContribution"),
    }
  );

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
            onSubmit={handleSubmit(insertContribution)}
            className="col-start-2 col-end-3 grid grid-cols-2"
          >
            {/* ファイル選択(画面左) */}
            <div className="grid grid-rows-fileUpload gap-6">
              {/* メインイメージ */}
              <PreviewMainArea
                imgFileUrl={
                  imgFile[0] === undefined ? "" : imgFile[0].imgFileUrl
                }
              />
              {/* サブイメージ */}
              <div className="grid grid-cols-previewSubArea gap-3">
                {(() => {
                  var previewSubArea = [];
                  for (let i = 1; i <= 4; i++) {
                    previewSubArea.push(
                      <PreviewSubArea
                        imgFileUrl={
                          imgFile[i] === undefined ? "" : imgFile[i].imgFileUrl
                        }
                      />
                    );
                  }
                  return previewSubArea;
                })()}
              </div>
              <FileSelectBtn
                register={register}
                errors={errors.imageFiles}
                selectFile={selectFile}
              />
            </div>
            {/* フォーム(画面右) */}
            <div className="grid grid-rows-contributeForm grid-cols-contributeForm gap-6">
              <ContributionForm
                register={register}
                errors={errors}
                getValues={getValues}
                setError={setError}
                clearErrors={clearErrors}
              />
            </div>
          </form>
        </main>
        <Footer />
      </body>
    </div>
  );
}
