import { SelectCategory } from "../selectBox/selectCategory";
import { SelectColor } from "../selectBox/selectColor";
import { SelectCompareCondition } from "../selectBox/selectCompareCondition";
import { SelectComposition } from "../selectBox/selectComposition";
import { InputCompositionRatio } from "../textBox/inputCompositionRatio";
import { InputText } from "../textBox/inputText";

//一覧/検索ページ
//入力エリアコンポーネント
const SearchInput = ({ category }) => {
  if (["1", "4", "6", "7", "9", "10"].includes(category)) {
    return <InputText name="keyword" id="keyword" placeholder="" />;
  } else if (category === "2") {
    return <SelectCategory name="keyword" id="keyword" />;
  } else if (category === "3") {
    return (
      <div className="grid grid-cols-inputComposition gap-2">
        <SelectComposition name="keyword" id="keyword" />
        <InputCompositionRatio name="compositionRatio" id="compositionRatio" />
        <SelectCompareCondition name="compareCondfition" />
      </div>
    );
  } else if (category === "5") {
    return <SelectColor name="keyword" id="keyword" />;
  } else if (category === "8") {
    return (
      <div className="grid grid-cols-inputUnitPrice gap-4">
        <InputText name="keyword" id="keyword" placeholder="" />
        <SelectCompareCondition name="compareCondfition" />
      </div>
    );
  }
};

export { SearchInput };
