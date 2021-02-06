import Head from "next/Head";
import React from "react";
import Footer from "./footer";
import Header from "./header";

const MyButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-red-700 font-semibold text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>アパレル生産関係者の情報共有ツール Cloth-To</title>
        </Head>
        <Header />
        <main>
          <MyButton
            onClick={() => {
              alert("hello");
            }}
          >
            "Hello"
          </MyButton>
          <form action="./api/user" method="get">
            <input type="text" name="test" />
            <input type="submit" value="api" />
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Index;
