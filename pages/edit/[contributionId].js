import axios from "axios";
import Router, { useRouter } from "next/router";
import React, { useContext, useState } from "react";
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
import { checkLogin } from "../../utils/checkLogin";
import { fetchContributionDetail } from "../../utils/getContributionDetail/fetchContributionDetail";
import { readFile } from "../../utils/readFile";
import { uploadImage } from "../../utils/uploadImage";

export default function ContributionId() {
  //ログインチェック実行
  checkLogin().then((isLogin) => {
    if (!isLogin) {
      Router.push("/login");
    }
  });

  const [imgFile, setImgFile] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  //投稿更新イベント
  const updateContribution = (data) => {
    //FireBase Storageに画像アップロード
    const idList = uploadImage(imgFile);

    for (let i = 0; i < 5; i++) {
      data[`imageUrl${i + 1}`] = idList[i] === undefined ? "" : idList[i];
    }

    //フォームデータ以外のデータをセット
    data.contributionId = router.query.contributionId;

    mutation.mutate(data);
  };

  const mutation = useMutation((formData) =>
    axios.post("../api/updateContribution", formData).then(() => {
      //処理結果を表示
      setIsOpen(true);

      //更新後のデータをリフェッチする
      setImgFile([]);
      queryClient.invalidateQueries("editPath");
    })
  );

  if (isFetching || isLoading || mutation.isFetching || mutation.isLoading)
    return <Loading />;

  if (error)
    return <Error href="/contributionHistory" errorMsg={error.message} />;

  if (mutation.isError)
    return (
      <Error href="/contributionHistory" errorMsg={mutation.error.message} />
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
        <main className="grid grid-cols-main">
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
                <SubmitBtn value="更新する" />
              </div>
            </div>
          </form>
        </main>
      </body>
      <ModalWindow
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        message={CONST.OK_MSG.FIN_UPDATE_CONTRIBUTION}
      />
    </div>
  );
}
