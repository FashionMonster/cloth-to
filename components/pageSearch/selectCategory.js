/* eslint-disable jsx-a11y/no-onchange */
//一覧/検索ページ
//入力エリアコンポーネント
const SelectCategory = (props) => {
  return (
    <select
      name="searchCategory"
      onChange={props.onChange}
      className="w-120 border border-solid rounded-sm border-gray-400 inline-block"
    >
      <option value="1">素材・製品名</option>
      <option value="2">分類</option>
      <option value="3">主組成</option>
      <option value="4">織・編地</option>
      <option value="5">色</option>
      <option value="6">柄</option>
      <option value="7">加工</option>
      <option value="8">単価</option>
      <option value="9">仕入先</option>
      <option value="10">投稿者</option>
    </select>
  );
};

export { SelectCategory };
