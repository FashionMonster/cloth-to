/* eslint-disable jsx-a11y/no-onchange */
import { chkCompositionDuplicate } from "../../utils/chkCompositionDuplicate";

//素材選択コンポーネント
const SelectComposition = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <select
        name={props.name}
        id={props.id}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
        onChange={() =>
          chkCompositionDuplicate(
            props.getValues,
            props.setError,
            props.clearErrors
          )
        }
      >
        <option value=""></option>
        <option value="1">綿</option>
        <option value="2">麻</option>
        <option value="3">羊毛</option>
        <option value="4">絹</option>
        <option value="5">ポリエステル</option>
        <option value="6">ナイロン</option>
        <option value="7">アクリル</option>
        <option value="8">ポリウレタン</option>
        <option value="9">レーヨン</option>
        <option value="10">キュプラ</option>
        <option value="11">アセテート</option>
        <option value="12">その他</option>
      </select>
      {props.errors?.type === "duplicate" && (
        <div className="text-red-600 text-sm w-40 relative">
          {props.errors.message}
        </div>
      )}
    </div>
  );
};

export { SelectComposition };
