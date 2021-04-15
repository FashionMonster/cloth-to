import { SelectCategory } from "../common/selectBox/selectCategory";
import { SelectColor } from "../common/selectBox/selectColor";
import { SelectCompareCondition } from "../common/selectBox/selectCompareCondition";
import { SelectComposition } from "../common/selectBox/selectComposition";
import { InputCompositionRatio } from "../common/textBox/inputCompositionRatio";
import { InputText } from "../common/textBox/inputText";

//一覧/検索ページ
//入力エリアコンポーネント
const SearchInput = ({ category, register, errors }) => {
  if (["1", "4", "6", "7", "9", "10"].includes(category)) {
    return (
      <InputText
        name="keyword"
        id="keyword"
        placeholder=""
        register={register({ required: true })}
        errors={errors.keyword}
        width="280"
      />
    );
  } else if (category === "2") {
    return (
      <SelectCategory
        name="keyword"
        id="keyword"
        register={register({ required: true })}
        errors={errors.keyword}
        width="280"
      />
    );
  } else if (category === "3") {
    return (
      <div className="grid grid-cols-inputComposition gap-2">
        <SelectComposition
          name="keyword"
          id="keyword"
          register={register({ required: true })}
          errors={errors.keyword}
          width="120"
        />
        <InputCompositionRatio
          name="compositionRatio"
          id="compositionRatio"
          register={register({ required: true, max: 100, min: 1 })}
          errors={errors.compositionRatio}
          width="20"
        />
        <SelectCompareCondition name="compareCondition" register={register()} />
      </div>
    );
  } else if (category === "5") {
    return (
      <SelectColor
        name="keyword"
        id="keyword"
        register={register({ required: true })}
        errors={errors.keyword}
        width="280"
      />
    );
  } else if (category === "8") {
    return (
      <div className="grid grid-cols-inputUnitPrice gap-4">
        <InputText
          name="keyword"
          id="keyword"
          placeholder=""
          register={register({ required: true, pattern: /^[0-9]+$/ })}
          errors={errors.keyword}
          width="48"
        />
        <SelectCompareCondition name="compareCondition" register={register()} />
      </div>
    );
  }
};

export { SearchInput };
