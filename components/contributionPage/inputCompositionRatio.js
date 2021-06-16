import { checkCompositionRatio } from "../../utils/checkCompositionRatio";

//素材比率コンポーネント
const InputCompositionRatio = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <input
        type="number"
        name={props.name}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400 disabled:bg-gray-100 disabled:text-black`}
        ref={props.register}
        onChange={() =>
          checkCompositionRatio(
            props.getValues,
            props.setError,
            props.clearErrors
          )
        }
        disabled={props.isDisabled}
        defaultValue={props.defaultValue}
      />
      {props.errors?.type === "totalRatioMax" && (
        <div className="text-red-600 text-sm w-40 relative">
          {props.errors.message}
        </div>
      )}
      {props.errors?.type === "ratioNegative" && (
        <div className="text-red-600 text-sm w-44 relative">
          {props.errors.message}
        </div>
      )}
    </div>
  );
};

export { InputCompositionRatio };
