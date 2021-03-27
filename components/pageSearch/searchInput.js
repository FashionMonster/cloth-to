import { SelectCategory } from "../selectBox/selectCategory";
import { SelectColor } from "../selectBox/selectColor";
import { SelectCompareCondfition } from "../selectBox/selectCompareCondfition";
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
      <div>
        <SelectComposition name="keyword" id="keyword" />
        <InputCompositionRatio name="compositionRatio" id="compositionRatio" />
        <SelectCompareCondfition name="compareCondfition" />
      </div>
    );
  } else if (category === "5") {
    return <SelectColor name="keyword" id="keyword" />;
  } else if (category === "8") {
    return (
      <div>
        <InputText name="keyword" id="keyword" placeholder="" />
        <SelectCompareCondfition name="compareCondfition" />
      </div>
    );
  }
};

export { SearchInput };
