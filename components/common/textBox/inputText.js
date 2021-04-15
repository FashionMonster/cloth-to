//テキスト入力コンポーネント
const InputText = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <input
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
      />
      {props.errors?.type === "required" && (
        <div className="text-red-600 text-sm relative">必須入力です</div>
      )}
      {props.errors?.type === "pattern" && (
        <div className="text-red-600 text-sm">数字のみ入力可能です</div>
      )}
    </div>
  );
};

export { InputText };
