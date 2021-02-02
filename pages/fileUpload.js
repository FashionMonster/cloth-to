import React from 'react'
import {FileBtn} from './components/common'

class FileUpload extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div className="grid grid-rows-fileUpload gap-8">
                <img className="w-490 h-490" />
                <div className="grid grid-cols-fileUpload gap-3">
                    <img className="w-109 h-109" />
                    <img className="w-109 h-109" />
                    <img className="w-109 h-109" />
                    <img className="w-109 h-109" />
                </div>
                <FileBtn value="ファイルを選択" />
            </div>
        </div>;

    }
}

export default FileUpload;