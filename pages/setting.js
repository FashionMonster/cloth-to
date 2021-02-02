import React from 'react';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
import { SubmitBtn } from './components/common'

const SettingItem = ({ id, children }) => {
    return <div className="h-8 leading-8">
        <label for={id}>{children}</label>
    </div>
}

const SettingInput = ({ type, name }) => {
    return <input type="text" name={name} id={name} className="w-80 border border-solid rounded-sm border-gray-400" />
}

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:3000/api/updateUser')
//     const data = await res.json()

//     return { props: {  } }
//   }

class Setting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <body className="grid grid-rows-layout gap-4 min-h-screen">
                <div id="headerWrapper">
                    <Header />
                    <Navigation />
                </div>
                <p className="text-center">ユーザー情報またはそれに紐づく企業情報の変更を行います。<br />
                変更したい場合は以下の情報を編集して下さい。</p>

                <main className="grid grid-cols-layout grid-rows-3">
                    <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                        <div className="grid grid-cols-2">
                            <div className="grid grid-cols-auto3x">
                                <form method="post" action="./api/updateComp" className="col-start-2 col-end-3 grid grid-rows-3 gap-8">
                                    <div className="grid grid-cols-settingForm">
                                        <SettingItem id="compId">企業ID：</SettingItem>
                                        <SettingInput type="text" name="compId" />
                                    </div>
                                    <div className="grid grid-cols-settingForm">
                                        <SettingItem id="compPass">企業PW：</SettingItem>
                                        <SettingInput type="password" name="compPass" />
                                    </div>
                                    <div className="grid grid-cols-settingForm" >
                                        <div className="w-80 col-start-2 col-end-3 flex justify-center">
                                            <SubmitBtn value="企業情報更新" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="grid grid-cols-auto3x">
                                <form method="post" action="./api/updateUser" className="col-start-2 col-end-3 grid grid-rows-3 gap-8">
                                    <div className="grid grid-cols-settingForm">
                                        <SettingItem id="userId">ユーザーID：</SettingItem>
                                        <SettingInput type="text" name="userId" />
                                    </div>
                                    <div className="grid grid-cols-settingForm">
                                        <SettingItem id="userPass">ユーザーPW：</SettingItem>
                                        <SettingInput type="password" name="userPass" />
                                    </div>
                                    <div className="grid grid-cols-settingForm" >
                                        <div className="w-80 col-start-2 col-end-3 flex justify-center">
                                            <SubmitBtn value="ユーザー情報更新" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </body>
        </div>;
    }
}

export default Setting;
