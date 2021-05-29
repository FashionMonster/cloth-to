import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

//トップページの使用方法部分
const SlickImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const imageArray = [
    { img: "/slideShow/createUser.png", msg: "会員登録します" },
    {
      img: "/slideShow/login.png",
      msg: "ログインします",
    },
    {
      img: "/slideShow/linkUserToGroup.png",
      msg: "グループ紐づけします(もしくはグループ作成します)",
    },
    { img: "/slideShow/contribute.png", msg: "投稿して、皆に共有します" },
    { img: "/slideShow/search.png", msg: "検索して、気になる情報を探します" },
    { img: "/slideShow/contributionDetail.png", msg: "投稿詳細を確認します" },
  ];

  return (
    <div className="w-1080">
      <Slider {...settings}>
        {imageArray.map((obj) => {
          return (
            <div className="w-1080">
              <Image
                src={obj.img}
                alt="イメージ"
                width="1080px"
                height="600px"
              />
              <p className="w-1080 text-center text-xl font-semibold mb-2">
                {obj.msg}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { SlickImages };
