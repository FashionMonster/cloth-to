//色選択コンポーネント
const SelectColor = (props) => {
  return (
    <div className={`w-${props.width} h-8`}>
      <select
        name={props.name}
        id={props.id}
        className={`w-${props.width} h-8 border border-solid rounded-sm border-gray-400`}
        ref={props.register}
      >
        <option value=""></option>
        <option value="1">レッド</option>
        <option value="2">オレンジ</option>
        <option value="3">イエロー</option>
        <option value="4">ベージュ</option>
        <option value="5">カーキ</option>
        <option value="6">オリーブ</option>
        <option value="7">グリーン</option>
        <option value="8">ネイビー</option>
        <option value="9">ブルー</option>
        <option value="10">パープル</option>
        <option value="11">ピンク</option>
        <option value="12">ホワイト</option>
        <option value="13">グレー</option>
        <option value="14">チャコールグレー</option>
        <option value="15">ブラック</option>
        <option value="16">シルバー</option>
        <option value="17">ゴールド</option>
        <option value="18">その他</option>
      </select>
      {props.errors && (
        <div className="text-red-600 text-sm relative">必須入力です</div>
      )}
    </div>
  );
};
export { SelectColor };
