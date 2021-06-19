//テキスト入力コンポーネント
const InputTextarea = (props) => {
  return (
    <div className={`w-${props.width} h-112`}>
      <textarea
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        ref={props.register}
        disabled={props.isDisabled}
        defaultValue={props.defaultValue}
        className={`w-${props.width} h-112 border border-solid rounded-sm border-gray-400 disabled:bg-gray-100 disabled:text-black`}
      />
      {props.errors?.type === "maxLength" && (
        <div className="text-red-600 text-sm">最大は200文字です</div>
      )}
    </div>
  );
};

export { InputTextarea };
