//グループ選択コンポーネント
const SelectGroupName = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <select
        name={props.name}
        id={props.id}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
      >
        <option value=""></option>
        {props.groupInfoList.map((item) => {
          return <option value={item.groupId}>{item.groupName}</option>;
        })}
      </select>
      {props.errors && (
        <div className="text-red-600 text-sm relative">必須入力です</div>
      )}
    </div>
  );
};
export { SelectGroupName };
