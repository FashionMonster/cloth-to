//テキスト入力コンポーネント
const InputText = (props) => {
  return (
    <input
      type="text"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      className="border border-solid rounded-sm border-gray-400"
    />
  );
};

export { InputText };
