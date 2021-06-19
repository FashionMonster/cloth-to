//テキスト入力コンポーネント
const InputPassword = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <input
        type="password"
        name={props.name}
        id={props.id}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
      />
      {props.errors?.type === "required" && (
        <div className="text-red-600 text-sm relative">必須入力です</div>
      )}
      {props.errors?.type === "minLength" && (
        <div className="text-red-600 text-sm">最小は6桁です</div>
      )}
      {props.errors?.type === "maxLength" && (
        <div className="text-red-600 text-sm">最大は12桁です</div>
      )}
    </div>
  );
};

export { InputPassword };
