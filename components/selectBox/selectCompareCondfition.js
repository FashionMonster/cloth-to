//比較条件選択コンポーネント
const SelectCompareCondfition = (props) => {
  return (
    <select
      name={props.name}
      id={props.id}
      className="border border-solid rounded-sm border-gray-400"
    >
      <option value="1">等しい</option>
      <option value="2">以上</option>
      <option value="3">以下</option>
    </select>
  );
};

export { SelectCompareCondfition };
