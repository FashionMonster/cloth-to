//サブミットボタンコンポーネント
const FileSelectBtn = (props) => {
  return (
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
        onChange={props.selectFile}
        ref={props.register({ required: true })}
        accept=".png,.jpg,.gif"
      />
      {props.errors?.type === "required" && (
        <div className="text-red-600 text-sm relative left-0 top-1">
          必須選択です
        </div>
      )}
    </label>
  );
};

export { FileSelectBtn };
