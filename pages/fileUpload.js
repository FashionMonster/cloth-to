import React from 'react'

class FileUpload extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div className="pictureWrapper">

                <img className="preview_main" />
                <img className="preview_sub" />
                <img className="preview_sub" />
                <img className="preview_sub" />
                <img className="preview_sub" />
                <label for="uploadBtn" className="uploadLabel">
                    ファイルを選択<input type="file" id="uploadBtn" />
                </label>
            </div>
        </div>;

    }
}

export default FileUpload;