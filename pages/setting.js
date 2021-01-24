import React from 'react';

class Setting extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div className="contentsWrapper">
                <p className="description">ユーザー情報またはそれに紐づく企業情報の変更を行います。<br />
                変更したい場合は以下の情報を編集して下さい。</p>

                <div className="formWrapper">
                    <form method="post" action="setting" className="compForm">
                        <label for="compId" className="compIdLabel">企業ID：</label>
                        <input type="text" name="compId" />

                        <label for="compPass" className="compPassLabel">企業PW：</label>
                        <input type="password" name="compPass" />

                        <input type="submit" value="企業情報更新" className="submitCompBtn"/>
                    </form>

                    <form method="post" action="setting" className="userForm">

                        <label for="userId" className="userIdLabel">ユーザーID：</label>
                        <input type="text" name="userId" />
                        <label for="userPass" className="userPassLabel">ユーザーPW：</label>
                        <input type="password" name="userPass" />

                        <input type="submit" value="ユーザー情報更新" className="submitUserBtn"/>
                    </form>
                </div>
            </div>
        </div>;
    }
}

export default Setting;