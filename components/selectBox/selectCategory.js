//分類選択コンポーネント
const SelectCategory = (props) => {
  return (
    <select
      name={props.name}
      id={props.id}
      className="border border-solid rounded-sm border-gray-400"
    >
      <option value="0"></option>
      <option value="1">製品</option>
      <option value="2">生地</option>
      <option value="3">副資材</option>
      <option value="4">その他</option>
    </select>
  );
};

export { SelectCategory };
