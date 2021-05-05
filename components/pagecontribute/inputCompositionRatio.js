import { checkCompositionRatioTotal } from "../../utils/checkCompositionRatioTotal";

//素材比率コンポーネント
const InputCompositionRatio = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <input
        type="number"
        name={props.name}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
        onChange={() =>
          checkCompositionRatioTotal(
            props.getValues,
            props.setError,
            props.clearErrors
          )
        }
      />
      {props.errors?.type === "totalRatioMax" && (
        <div className="text-red-600 text-sm w-40 relative">
          {props.errors.message}
        </div>
      )}
      {props.errors?.type === "totalRatioNegative" && (
        <div className="text-red-600 text-sm w-44 relative">
          {props.errors.message}
        </div>
      )}
    </div>
  );
};

export { InputCompositionRatio };