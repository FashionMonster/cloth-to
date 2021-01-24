import React from 'react';
import Head from 'next/Head'
import Header from './header';
import Footer from './footer';

class Index extends React.Component {
  render() {
    return <div>
      <Head>
        <title>アパレル生産関係者の情報共有ツール Cloth-To</title>
      </Head>
      <Header />
      <main>
        <form action="./api/user" method="get">
          <input type="text" name="test" />
          <input type="submit" value="api" className="btn-blue"/>
        </form>
      </main>
      <Footer />
    </div>
  }
}

export default Index;