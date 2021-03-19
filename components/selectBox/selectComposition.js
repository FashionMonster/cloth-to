//素材選択コンポーネント
const SelectComposition = (props) => {
  return (
    <select
      name={props.name}
      id={props.id}
      className="border border-solid rounded-sm border-gray-400"
    >
      <option value="0"></option>
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
  );
};

export { SelectComposition };
