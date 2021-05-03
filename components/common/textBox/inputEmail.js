//テキスト入力コンポーネント
const InputEmail = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <input
        type="email"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
      />
      {props.errors?.type === "required" && (
        <div className="text-red-600 text-sm relative">必須入力です</div>
      )}
    </div>
  );
};

export { InputEmail };
