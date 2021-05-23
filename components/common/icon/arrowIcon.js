/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

//ページネーションの両端アイコン
const ArrowIcon = (props) => {
  let queryObj = props.router.query;

  if (props.icon === ">") {
    queryObj.page = queryObj.page + 1;
  } else if (props.icon === "<") {
    queryObj.page = queryObj.page - 1;
  }

  return (
    <div
      onClick={() =>
        props.router.push({
          pathname: props.pathName,
          query: queryObj,
        })
      }
      className="w-7 h-7 bg-purple-200 mx-2 text-center rounded-3xl font-semibold hover:bg-purple-600 hover:text-white"
    >
      {props.icon}
    </div>
  );
};

export { ArrowIcon };
