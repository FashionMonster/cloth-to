import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthContext } from "../../components/common/auth/authProvider";
import { FileSelectBtn } from "../../components/common/button/fileSelectBtn";
import { SubmitBtn } from "../../components/common/button/submitBtn";
import { Error } from "../../components/common/error";
import { Header } from "../../components/common/header";
import { Loading } from "../../components/common/loading/loading";
import { ModalWindow } from "../../components/common/modal/modalWindow";
import { Navigation } from "../../components/common/navigation";
import { PreviewMainArea } from "../../components/common/preview/previewMainArea";
import { PreviewSubArea } from "../../components/common/preview/previewSubArea";
import ContributionForm from "../../components/contributionPage/contributionForm";
import { CONST } from "../../constants/const";
import { fetchContributionDetail } from "../../utils/getContributionDetail/fetchContributionDetail";
import { isImageExt } from "../../utils/isImageExt";
import { readFile } from "../../utils/readFile";
import { uploadImage } from "../../utils/uploadImage";

export default function ContributionId() {
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
  const router = useRouter();
  const value = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { isFetching, isLoading, error, data } = useQuery(
    ["editPath", router.asPath],
    () => fetchContributionDetail(router, value.userInfo)
  );

  const selectFile = async (e) => {
    e.preventDefault();

    //ファイルオブジェクトを取得
    const files = e.target.files;

    //ファイル、ファイル名のセット
    let fileList = [];
    for (let i = 0; i < 5; i++) {
      //ファイルがある場合
      if (files.length > i) {
        const fileUrl = await readFile(files[i]);
        fileList.push({
          imgFileBlob: files[i],
          imgFileUrl: fileUrl,
          fileName: files[i].name,
        });
      } else {
        fileList.push({
          imgFileBlob: null,
          imgFileUrl: "",
          fileName: "",
        });
      }
    }

    setImgFile(fileList);
  };

  //投稿更新イベント
  const updateContribution = (data) => {
    mutation.mutate(data);
  };

  const mutation = useMutation(
    async (formData) => {
      //拡張子チェック
      for (const file of imgFile) {
        if (file.fileName !== "") {
          if (!isImageExt(file.fileName)) {
            setIsOpen(true);
            modalMessage.current = CONST.ERR_MSG.WORNG_EXTENSION;
            return;
          }
        }
      }

      //FireBase Storageに画像アップロード
      const idList = uploadImage(imgFile);

      //アップロード画像IDをフォームデータにセット
      for (let i = 0; i < 5; i++) {
        formData[`imageUrl${i + 1}`] = idList[i] === undefined ? "" : idList[i];
      }

      //その他必要なデータをフォームデータにセット
      formData.contributionId = router.query.contributionId;

      await axios.post("../api/updateContribution", formData).then(() => {
        //処理結果を表示
        setIsOpen(true);
        modalMessage.current = CONST.OK_MSG.FIN_UPDATE_CONTRIBUTION;

        //更新後のデータをリフェッチする
        setImgFile([]);
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("editPath");
        queryClient.invalidateQueries("searchPath");
        queryClient.invalidateQueries("contributionHistoryPath");
        queryClient.invalidateQueries("contributionDetail");
      },
    }
  );

  if (isFetching || isLoading || mutation.isFetching || mutation.isLoading)
    return <Loading />;

  //ログインしていない場合に、画面が見えないようにする
  //応急処置なので、対応予定
  if (value.userInfo.userId === "") {
    return <></>;
  }

  if (error)
    return (
      <Error backType={CONST.BACK_TYPE.BROWSER_BACK} errorMsg={error.message} />
    );

  if (mutation.isError)
    return (
      <Error
        backType={CONST.BACK_TYPE.BROWSER_BACK}
        errorMsg={mutation.error.message}
      />
    );

  return (
    <div>
      <body className="grid grid-rows-layout gap-8 min-h-screen relative">
        <div id="headerWrapper">
          <Header isLogined={true} />
          <Navigation />
        </div>
        <p className="text-center">
          投稿の詳細を確認できます。
          <br />
          新たなクリエイションに役立てることができるかもしれません。
        </p>
        <main className="grid grid-cols-contents">
          <form
            onSubmit={handleSubmit(updateContribution)}
            className="col-start-2 col-end-3 grid grid-cols-2"
          >
            {/* ファイル選択(画面左) */}
            <div className="grid grid-rows-fileUpload gap-6">
              {/* メインイメージ */}
              <PreviewMainArea
                imgFileUrl={
                  imgFile[0] === undefined
                    ? data.imgFileUrl[0]
                    : imgFile[0].imgFileUrl
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
                          imgFile[i] === undefined
                            ? data.imgFileUrl[i]
                            : imgFile[i].imgFileUrl
                        }
                      />
                    );
                  }
                  return previewSubArea;
                })()}
              </div>
              <FileSelectBtn
                register={register}
                isRequired={false}
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
                data={data}
              />
              <div className="flex justify-around">
                <SubmitBtn value="更新する" width={24} />
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
