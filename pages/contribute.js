import React from 'react'
import FileUpload from './fileUpload'
import InputForm from './inputForm'

class Contribute extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="contentsWrapper">
                <p className="description">社内・チームで情報を共有します。<br />
                    あなたの投稿内容は、他メンバーの新たなクリエイションに役立てることができます。</p>
                <FileUpload />
                <InputForm/>
            </div>
        </div>;
    }
}

export default Contribute;
