import React from "react";
import { FileBtn } from "../components/common";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="grid grid-rows-fileUpload gap-8">
          <img className="w-490 h-490" alt="メインイメージ" />
          <div className="grid grid-cols-fileUpload gap-3">
            <img className="w-109 h-109" alt="サブイメージ1" />
            <img className="w-109 h-109" alt="サブイメージ2" />
            <img className="w-109 h-109" alt="サブイメージ3" />
            <img className="w-109 h-109" alt="サブイメージ4" />
          </div>
          <FileBtn value="ファイルを選択" />
        </div>
      </div>
    );
  }
}

export default FileUpload;
