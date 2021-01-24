import React from 'react';

class Edit extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div className="contentsWrapper">
                <p className="description">投稿した履歴を閲覧、編集できます。<br />
            あなたが収集した情報記録を見返すことができます。又、編集することで共有者に最新の情報を提供することができます。</p>

                <form method="get" action="search">
                    <select name="searchCategory">
                        <option value="name">名称</option>
                        <option value="material">素材</option>
                        <option value="price">単価</option>
                        <option value="supplier">仕入先</option>
                        <option value="contributer">投稿者</option>
                    </select>

                    <input type="text" name="searchText"></input>
                    <label for="submitLabel" className="submitLabel">
                        検索<input type="submit" value="検索" />
                    </label>
                </form>

                <div className="postedWrapper">
                    <img className="postedImg" />
                    <div className="postedInfo">
                        <p className="materialName">素材・製品名</p>
                        <button className="detailBtn">詳細/編集</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Edit;