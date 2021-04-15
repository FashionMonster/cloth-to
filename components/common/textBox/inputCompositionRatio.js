//素材比率コンポーネント
const InputCompositionRatio = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <input
        type="number"
        name={props.name}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
      />
      {props.errors?.type === "required" && (
        <div className="text-red-600 text-sm">必須入力です</div>
      )}
      {props.errors?.type === "max" && (
        <div className="text-red-600 text-sm">上限は100です</div>
      )}
      {props.errors?.type === "min" && (
        <div className="text-red-600 text-sm">下限は1です</div>
      )}
    </div>
  );
};

export { InputCompositionRatio };
