import { SelectCategory } from "../common/selectBox/selectCategory";
import { SelectColor } from "../common/selectBox/selectColor";
import { InputText } from "../common/textBox/inputText";
import { InputCompositionRatio } from "./inputCompositionRatio";
import { SelectComposition } from "./selectComposition";

const undefinedToBlank = (param) => {
  if (param === undefined) {
    return "";
  } else {
    return param;
  }
};

export default function ContributionForm(props) {
  return (
    <>
      <label htmlFor="materialName">素材・製品名</label>
      <InputText
        name="materialName"
        id="materialName"
        placeholder="例：2020SS シャツ用生地"
        register={props.register({ required: true })}
        errors={props.errors.materialName}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.materialName}
      />

      <label htmlFor="category">分類</label>
      <SelectCategory
        name="category"
        id="category"
        register={props.register({ required: true })}
        errors={props.errors.category}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.category}
      />

      <label htmlFor="composition1">主組成</label>
      <div className="grid grid-cols-3 gap-1">
        <div className="grid grid-cols-2 gap-1">
          <SelectComposition
            name="composition1"
            id="composition1"
            register={props.register()}
            getValues={props.getValues}
            setError={props.setError}
            clearErrors={props.clearErrors}
            errors={props.errors.composition1}
            width="16"
            isDisabled={props.isDisabled}
            defaultValue={
              props.data === undefined ? "" : props.data.composition1
            }
          />
          <InputCompositionRatio
            name="compositionRatio1"
            register={props.register()}
            getValues={props.getValues}
            setError={props.setError}
            clearErrors={props.clearErrors}
            errors={props.errors.compositionRatio1}
            width="16"
            isDisabled={props.isDisabled}
            defaultValue={
              props.data === undefined ? "" : props.data.compositionRatio1
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <SelectComposition
            name="composition2"
            id="composition2"
            register={props.register()}
            getValues={props.getValues}
            setError={props.setError}
            clearErrors={props.clearErrors}
            errors={props.errors.composition2}
            width="16"
            isDisabled={props.isDisabled}
            defaultValue={
              props.data === undefined ? "" : props.data.composition2
            }
          />
          <InputCompositionRatio
            name="compositionRatio2"
            register={props.register()}
            getValues={props.getValues}
            setError={props.setError}
            clearErrors={props.clearErrors}
            errors={props.errors.compositionRatio2}
            width="16"
            isDisabled={props.isDisabled}
            defaultValue={
              props.data === undefined ? "" : props.data.compositionRatio2
            }
          />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <SelectComposition
            name="composition3"
            id="composition3"
            register={props.register()}
            getValues={props.getValues}
            setError={props.setError}
            clearErrors={props.clearErrors}
            errors={props.errors.composition3}
            width="16"
            isDisabled={props.isDisabled}
            defaultValue={
              props.data === undefined ? "" : props.data.composition3
            }
          />
          <InputCompositionRatio
            name="compositionRatio3"
            register={props.register()}
            getValues={props.getValues}
            setError={props.setError}
            clearErrors={props.clearErrors}
            errors={props.errors.compositionRatio3}
            width="16"
            isDisabled={props.isDisabled}
            defaultValue={
              props.data === undefined ? "" : props.data.compositionRatio3
            }
          />
        </div>
      </div>

      <label htmlFor="fabricStructure">織・編地</label>
      <InputText
        name="fabricStructure"
        id="fabricStructure"
        placeholder="例：サテン"
        register={props.register()}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={
          props.data === undefined ? "" : props.data.fabricStructure
        }
      />

      <label htmlFor="color">色</label>
      <SelectColor
        name="color"
        id="color"
        register={props.register()}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.color}
      />

      <label htmlFor="pattern">柄</label>
      <InputText
        name="pattern"
        id="pattern"
        placeholder="例：ストライプ"
        register={props.register()}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.pattern}
      />

      <label htmlFor="processing">加工</label>
      <InputText
        name="processing"
        id="processing"
        placeholder="例：撥水加工、防汚加工"
        register={props.register()}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.processing}
      />

      <label htmlFor="unitPrice">単価</label>
      <InputText
        name="unitPrice"
        id="unitPrice"
        placeholder="例：480"
        register={props.register({ pattern: /^[0-9]+$/ })}
        errors={props.errors.unitPrice}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.unitPrice}
      />

      <label htmlFor="supplier">仕入先</label>
      <InputText
        name="supplier"
        id="supplier"
        placeholder="例：株式会社 〇〇"
        register={props.register()}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.supplier}
      />

      <label htmlFor="comment">コメント</label>
      <textarea
        name="comment"
        className="h-112 border border-solid rounded-sm border-gray-400 disabled:bg-gray-100 disabled:text-black"
        id="comment"
        placeholder="記載した内容以外の情報があれば記入します。"
        ref={props.register()}
        disabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.comment}
      />
      <div />
    </>
  );
}
