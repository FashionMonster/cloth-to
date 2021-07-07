import axios from "axios";
import Head from "next/Head";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { AuthContext } from "../components/common/auth/authProvider";
import { FileSelectBtn } from "../components/common/button/fileSelectBtn";
import { SubmitBtn } from "../components/common/button/submitBtn";
import { Error } from "../components/common/error";
import { Header } from "../components/common/header";
import { Loading } from "../components/common/loading/loading";
import { ModalWindow } from "../components/common/modal/modalWindow";
import { Navigation } from "../components/common/navigation";
import { PreviewMainArea } from "../components/common/preview/previewMainArea";
import { PreviewSubArea } from "../components/common/preview/previewSubArea";
import ContributionForm from "../components/contributionPage/contributionForm";
import { CONST } from "../constants/const";
import { isImageExt } from "../utils/isImageExt";
import { readFile } from "../utils/readFile";
import { uploadImage } from "../utils/uploadImage";

export default function Contribute() {
  const value = useContext(AuthContext);
  const [imgFile, setImgFile] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalMessage = useRef("");
  const {
    handleSubmit,
    register,
    errors,
    getValues,
    setError,
    clearErrors,
  } = useForm();
  const queryClient = useQueryClient();

  //ファイル選択イベント
  const selectFile = async (e) => {
    e.preventDefault();

    //ファイルオブジェクトを取得
    const files = e.target.files;

    //ファイル、ファイル名のセット
    let fileList = [];
    for (const file of files) {
      const fileUrl = await readFile(file);
      fileList.push({
        imgFileBlob: file,
        imgFileUrl: fileUrl,
        fileName: file.name,
      });
    }

    setImgFile(fileList);
  };

  //投稿イベント
  const insertContribution = (data) => {
    //拡張子チェック
    for (const file of imgFile) {
      if (!isImageExt(file.fileName)) {
        setIsOpen(true);
        modalMessage.current = CONST.ERR_MSG.WORNG_EXTENSION;
        return;
      }
    }

    mutation.mutate(data);
  };

  const mutation = useMutation(
    (formData) => {
      //FireBase Storageに画像アップロード
      const idList = uploadImage(imgFile);

      for (let i = 0; i < 5; i++) {
        formData[`imageUrl${i + 1}`] = idList[i] === undefined ? "" : idList[i];
      }

      //フォームデータ以外のデータをセット
      formData.isInit = false;
      formData.userId = value.userInfo.userId;
      formData.groupId = value.userInfo.groupId;

      const data = axios.post("./api/insertContribution", formData).then(() => {
        setImgFile([]); //初期化
        setIsOpen(true);
        modalMessage.current = CONST.OK_MSG.FIN_CREATE_CONTRIBUTION;
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("searchPath");
        queryClient.invalidateQueries("contributionHistoryPath");
      },
    }
  );

  if (mutation.isFetching || mutation.isLoading) return <Loading />;

  //ログインしていない場合に、画面が見えないようにする
  //応急処置なので、対応予定
  if (value.userInfo.userId === "") {
    return <></>;
  }

  if (mutation.isError)
    return (
      <Error
        backType={CONST.BACK_TYPE.RELOAD}
        href="/contribution"
        errorMsg={mutation.error.message}
      />
    );

  return (
    <div>
      <Head>
        <title>アパレル事業者向けの情報共有ツール Cloth-To 投稿画面</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body className="grid grid-rows-layout gap-8 min-h-screen relative">
        <div id="headerWrapper">
          <Header isLogined={true} />
          <Navigation />
        </div>
        <p className="text-center">
          社内・チームで情報を共有します。
          <br />
          あなたの投稿内容は、他メンバーの新たなクリエイションに役立てることができます。
        </p>
        <main className="grid grid-cols-contents">
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
                isRequired={true}
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
                isDisabled={false}
              />
              <div className="flex justify-around">
                {/* <SubmitBtn value="一時保存" /> */}
                <SubmitBtn value="投稿する" width={24} />
              </div>
            </div>
          </form>
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
