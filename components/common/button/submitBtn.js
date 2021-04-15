//サブミットボタンコンポーネント
const SubmitBtn = (props) => {
  return (
    <input
      type="submit"
      id="submit"
      value={props.value}
      className="bg-purple-700 h-8 text-white rounded text-center px-2 py-1 hover:bg-purple-800 hover:text-white"
    />
  );
};
export { SubmitBtn };
