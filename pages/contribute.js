import React from 'react'
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
import FileUpload from './fileUpload'
import InputForm from './inputForm'

class Contribute extends React.Component {

    // constructor(props) {
    //         super(props);
    // }

    render() {
        return <div>
            <body className="grid grid-rows-layout gap-4 min-h-screen">
                <div id="headerWrapper">
                    <Header />
                    <Navigation />
                </div>
                <p className="text-center">社内・チームで情報を共有します。<br />
                    あなたの投稿内容は、他メンバーの新たなクリエイションに役立てることができます。</p>
                <main className="grid grid-cols-layout">
                        <div className="col-start-2 col-end-3 grid grid-cols-2">
                            <div><FileUpload /></div>
                            <div><InputForm /></div>            
                        </div>
                </main>
                <Footer />
            </body>
        </div>;
    }
}

export default Contribute;