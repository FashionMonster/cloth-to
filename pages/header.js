import React from 'react';
import Link from 'next/Link'

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/search">一覧/検索</Link>
                    </li>
                    <li>
                        <Link href="/contribute">投稿</Link>
                    </li>
                    <li>
                        <Link href="/edit">履歴/編集</Link>
                    </li>
                    <li>
                        <Link href="/setting">設定</Link>
                    </li>
                </ul>
            </nav>
        </div>;
    }
}

export default Header;