import { SelectCategory } from "../common/selectBox/selectCategory";
import { SelectColor } from "../common/selectBox/selectColor";
import { InputTextarea } from "../common/testarea/inputTextarea";
import { InputText } from "../common/textBox/inputText";
import { InputCompositionRatio } from "./inputCompositionRatio";
import { SelectComposition } from "./selectComposition";

export default function ContributionForm(props) {
  return (
    <>
      <label htmlFor="materialName">素材・製品名</label>
      <InputText
        name="materialName"
        id="materialName"
        placeholder="例：2020SS シャツ用生地"
        register={props.register({ required: true, maxLength: 50 })}
        errors={props.errors.materialName}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.materialName}
        maxLength="50"
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
        register={props.register({ maxLength: 50 })}
        errors={props.errors.fabricStructure}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={
          props.data === undefined ? "" : props.data.fabricStructure
        }
        maxLength="50"
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
        register={props.register({ maxLength: 50 })}
        errors={props.errors.pattern}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.pattern}
        maxLength="50"
      />

      <label htmlFor="processing">加工</label>
      <InputText
        name="processing"
        id="processing"
        placeholder="例：撥水加工、防汚加工"
        register={props.register({ maxLength: 50 })}
        errors={props.errors.processing}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.processing}
        maxLength="50"
      />

      <label htmlFor="unitPrice">単価</label>
      <InputText
        name="unitPrice"
        id="unitPrice"
        placeholder="例：480"
        register={props.register({ maxLength: 12, pattern: /^[0-9]+$/ })}
        errors={props.errors.unitPrice}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.unitPrice}
        maxLength="12"
      />

      <label htmlFor="supplier">仕入先</label>
      <InputText
        name="supplier"
        id="supplier"
        placeholder="例：株式会社 〇〇"
        register={props.register({ maxLength: 50 })}
        errors={props.errors.supplier}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.supplier}
        maxLength="50"
      />

      <label htmlFor="comment">コメント</label>
      <InputTextarea
        name="comment"
        id="comment"
        placeholder="その他共有したい内容があればご入力ください。"
        register={props.register({ maxLength: 200 })}
        errors={props.errors.comment}
        width="408"
        isDisabled={props.isDisabled}
        defaultValue={props.data === undefined ? "" : props.data.supplier}
      />
      <div />
    </>
  );
}
