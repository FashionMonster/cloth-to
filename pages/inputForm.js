import React from 'react'
// import css from 'styled-jsx/css'

class InputForm extends React.Component {

    constructor(props) {
        super(props);

        // //Local stateを定義
        // this.state = {
        //     hoverBtn: "",
        //     hoverBtnStyle: BTN_STYLE_UNHOVER
        // }

        // this.btnEvent = this.btnEvent.bind(this);
    }

    //ボタンのホバー時
    // btnEvent(btn,isHover) {
    //     if (isHover) {
    //         this.setState({
    //             hoverBtn: btn,
    //             hoverBtnStyle: BTN_STYLE_HOVER
    //         })
    //     } else {
    //         this.setState({
    //             hoverBtn: btn,
    //             hoverBtnStyle: BTN_STYLE_UNHOVER
    //         })
    //     }
    // }

    render() {
        // const input_composition = [];
        //主組成フォーム作成
        // for (let i = 0; i < 3; i++) {
        //     input_composition.push(
        //         <div className="COMPOSITION_WRAPPER" style={COMPOSITION_WRAPPER}>
        //             <select name="composition" id="composition" className="composition" style={COMPOSITION_INPUT}>
        //                 <option value="0"></option>
        //                 <option value="1">綿</option>
        //                 <option value="2">麻</option>
        //                 <option value="3">羊毛</option>
        //                 <option value="4">絹</option>
        //                 <option value="5">ポリエステル</option>
        //                 <option value="6">ナイロン</option>
        //                 <option value="7">アクリル</option>
        //                 <option value="8">ポリウレタン</option>
        //                 <option value="9">レーヨン</option>
        //                 <option value="10">キュプラ</option>
        //                 <option value="11">アセテート</option>
        //                 <option value="12">その他</option>
        //             </select>
        //             <input type="text" name="percentage" id="percentage1" className="COMPOSITION_PERCENTAGE" style={COMPOSITION_PERCENTAGE} />
        //             <span style={i == 2 ? PERCENTAGE_MARGIN : PERCENTAGE_MARGIN_LAST}>%</span>
        //         </div>
        //     )
        // }

        return <div>
            {/* <style jsx>{CSS_STYLE}</style>
            <style jsx>
                {`
                .${this.state.hoverBtn}{
                    background : ${this.state.hoverBtnStyle.background};
                    color      : ${this.state.hoverBtnStyle.color};
                `}
            </style> */}
            <div id="formWrapper">
                <form method="get" action="search">
                    <label for="materialName">素材・製品名</label>
                    <input type="text" name="materialName" id="materialName" className="inputBox" placeholder="例：2020SS シャツ用生地" />

                    <label for="category">分類</label>
                    <select name="category" id="category">
                        <option value="0"></option>
                        <option value="1">製品</option>
                        <option value="2">生地</option>
                        <option value="3">副資材</option>
                        <option value="4">その他</option>
                    </select>

                    <label for="composition">主組成</label>
                    <div>
                        {/* {input_composition} */}
                    </div>

                    <label for="fabricStructure">織・編地</label>
                    <input type="text" name="fabricStructure" id="fabricStructure" placeholder="例：サテン" />

                    <label for="color">色</label>
                    <select name="color" id="color">
                        <option value="0"></option>
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

                    <label for="pattern">柄</label>
                    <input type="text" name="pattern" id="pattern" placeholder="例：ストライプ" />

                    <label for="processing">加工</label>
                    <div>
                        <input type="text" name="processing" className="processing" placeholder="例：撥水加工" />
                        <input type="text" name="processing" className="processing" placeholder="例：防汚加工" />
                        <input type="text" name="processing" className="processing" placeholder="例：シルキー加工" />
                    </div>
                    <label for="unitPrice">単価</label>
                    <input type="text" name="unitPrice" id="unitPrice" placeholder="例：480" />

                    <label for="supplier">仕入先</label>
                    <input type="text" name="supplier" id="supplier" placeholder="例：株式会社 〇〇" />

                    <label for="comment">コメント</label>
                    <textarea name="comment" className="comment" id="comment" placeholder="記載した内容以外の情報があれば記入します。" />

                    <div></div>
                    {/* <div className="actionWrapper">
                        <input type="submit" value="一時保存する" className="saveBtn"
                            onMouseOver={() => this.btnEvent("saveBtn",true)}
                            onMouseOut={() => this.btnEvent("saveBtn",false)} />
                        <input type="submit" value="投稿する" className="contributeBtn"
                            onMouseOver={() => this.btnEvent("contributeBtn",true)}
                            onMouseOut={() => this.btnEvent("contributeBtn",false)} />
                    </div> */}
                </form>
            </div>
        </div>;
    }
}

export default InputForm;


//コンポーネント内のstyle
// const CSS_STYLE = css`
// form{
//     height:650px;
//     float:right;
//     margin-right:100px;
//     display: grid;
// 　　grid-template-columns: 120px 540px;
//     grid-template-rows: 30px 30px 30px 30px 30px 30px 30px 30px 30px 135px 30px;
//     grid-row-gap:20px;
// }
// label {
//     grid-column: 1 / 2;
// }
// input, button {
//     grid-column: 2 / 3;
// }
// .processing{
//     width:160px;
//     height:30px;
//     margin-right:18px;
//     padding:0px
//     border-width:0px;
// }
// .processing:last-child{
//     margin-right:0px;
// }
// .comment{
//     resize: none;
// }
// .actionWrapper{
//     text-align:center;
// }
// .contributeBtn{
//     width:70px;
//     height:30px;
//     margin-left:50px;
//     border-radius : 5%;
//     text-align    : center; 
//     cursor        : pointer;
//     background    : #7f007f;
//     color         : #ffffff;
//     border        : 2px solid #7f007f;
// }
// .saveBtn{
//     width:100px;
//     height:30px;
//     border-radius : 5%;
//     text-align    : center; 
//     cursor        : pointer;
//     background    : #7f007f;
//     color         : #ffffff;
//     border        : 2px solid #7f007f;
// }`

// //レンダリング時に組み立てる要素のstyle
// const COMPOSITION_WRAPPER = {
//     display: "inline-block"
// };

// const COMPOSITION_INPUT = {
//     width: "110px",
//     height: "30px",
//     marginRight: "10px"
// };

// const COMPOSITION_PERCENTAGE = {
//     width: "25px",
//     height: "24px"
// }

// const PERCENTAGE_MARGIN = {
//     marginRight: "0px"
// }

// const PERCENTAGE_MARGIN_LAST = {
//     marginRight: "15px"
// }

// //コンポーネント内の動的なstyle
// const BTN_STYLE_HOVER = {
//     background: "#ffffff",
//     color: "#7f007f"
// }

// const BTN_STYLE_UNHOVER = {
//     background: "#7f007f",
//     color: "#ffffff"
// }