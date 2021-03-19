//サブミットボタンコンポーネント
const SubmitBtn = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="bg-purple-700 text-white rounded px-2 py-1
         hover:bg-purple-800 hover:text-white"
    />
  );
};

export { SubmitBtn };
