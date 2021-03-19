//素材比率コンポーネント
const InputCompositionRatio = (props) => {
  return (
    <input
      type="number"
      min="1"
      max="100"
      name={props.name}
      className="border border-solid rounded-sm border-gray-400"
    />
  );
};

export { InputCompositionRatio };
